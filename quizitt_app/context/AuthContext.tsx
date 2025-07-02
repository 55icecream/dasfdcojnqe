import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import api from '../services/api';

interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
  currentStreak?: number;
  longestStreak?: number;
  surveyFilled?: boolean;
  syllabus?: string[];
  currentSubscription?: any;
  emailVerified?: boolean;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  verifyEmail: (email: string, otp: string) => Promise<void>;
  googleLogin: () => Promise<void>;
  checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      console.log("AuthProvider initialized");
      checkAuthStatus();
    }
  }, []);

  useEffect(() => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common['Authorization'];
    }
  }, [token]);

  const checkAuthStatus = async () => {
    console.log("checkAuthStatus called");
    try {
      const storedToken = await AsyncStorage.getItem('token');
      const storedUser = await AsyncStorage.getItem('user');

      if (storedToken && storedUser) {
        setToken(storedToken);

        try {
          const response = await api.get('/api/v1/auth/me');
          const userData = response.data.user;
          console.log('User data from API:', userData);
          setUser(userData);
          await AsyncStorage.setItem('user', JSON.stringify(userData));
        } catch (error: any) {
          console.error('Error fetching user data:', error);
          if (
            error?.response?.status === 401 ||
            error?.response?.status === 404
          ) {
            await logout();
          } else {
            console.error('Error checking auth status:', error);
          }
        }
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post('/api/v1/auth/login', { email, password });
      const { token: newToken, user: userData } = response.data;

      await AsyncStorage.setItem('token', newToken);
      await AsyncStorage.setItem('user', JSON.stringify(userData));

      setToken(newToken);
      setUser(userData);

      console.log('Login successful, user data:', userData);
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      const response = await api.post('/api/v1/auth/register', { username, email, password });
      const { token: newToken, user: userData } = response.data;

      await AsyncStorage.setItem('token', newToken);
      await AsyncStorage.setItem('user', JSON.stringify(userData));

      setToken(newToken);
      setUser(userData);

      console.log('Registration successful, user data:', userData);
    } catch (error: any) {
      console.error('Registration error:', error);
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  };

  const verifyEmail = async (email: string, otp: string) => {
    try {
      await api.post('/api/v1/auth/verify-email', { email, otp });
      
      // Refresh user data after email verification
      await checkAuthStatus();
      
      console.log('Email verification successful');
    } catch (error: any) {
      console.error('Email verification error:', error);
      throw new Error(error.response?.data?.message || 'Email verification failed');
    }
  };

  const googleLogin = async () => {
    try {
      const { getGoogleAuthUrl } = await import('../services/api');
      const redirectUrl = getGoogleAuthUrl();
   
    } catch (error: any) {
      console.error('Google login error:', error);
      throw new Error('Google login failed');
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      setToken(null);
      setUser(null);
      console.log('Logout successful');
      router.replace('/login/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value: AuthContextType = {
    user,
    token,
    isLoading,
    login,
    register,
    logout,
    verifyEmail,
    googleLogin,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};