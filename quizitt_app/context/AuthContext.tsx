import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { authAPI } from '../services/api';

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
  xp?: number;
  achievements?: string[];
  gender?: string;
  dob?: string;
  contact_no?: string;
  languages?: string[];
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  verifyEmail: (email: string, otp: string) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
  updateSyllabus: (syllabus: string[], additionalData?: any) => Promise<void>;
  checkAuthStatus: () => Promise<void>;
  refreshUser: () => Promise<void>;
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
      console.log("AuthProvider mounted");
      checkAuthStatus();
    }
  }, []);

  const checkAuthStatus = async () => {
    console.log("checkAuthStatus called");
    try {
      const storedToken = await AsyncStorage.getItem('token');
      const storedUser = await AsyncStorage.getItem('user');

      if (storedToken && storedUser) {
        setToken(storedToken);

        try {
          const response = await authAPI.getCurrentUser();
          const userData = response.data.user;
          console.log('User data from API:', userData);
          setUser(userData);
          await AsyncStorage.setItem('user', JSON.stringify(userData));
        } catch (error: any) {
          console.error('Error fetching user data:', error);
          if (error?.response?.status === 401 || error?.response?.status === 404) {
            await logout();
          } else {
            // If API call fails but we have stored user data, use it temporarily
            try {
              const parsedUser = JSON.parse(storedUser);
              setUser(parsedUser);
            } catch (parseError) {
              console.error('Error parsing stored user data:', parseError);
              await logout();
            }
          }
        }
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshUser = async () => {
    if (!token) return;
    
    try {
      const response = await authAPI.getCurrentUser();
      const userData = response.data.user;
      setUser(userData);
      await AsyncStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Error refreshing user data:', error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await authAPI.login(email, password);
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
      const response = await authAPI.register(username, email, password);
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
      await authAPI.verifyEmail(email, otp);
      
      // Refresh user data after email verification
      await refreshUser();
      
      console.log('Email verification successful');
    } catch (error: any) {
      console.error('Email verification error:', error);
      throw new Error(error.response?.data?.message || 'Email verification failed');
    }
  };

  const updateProfile = async (data: Partial<User>) => {
    try {
      if (data.username) {
        await authAPI.updateUsername(data.username);
      }
      if (data.avatarUrl) {
        await authAPI.updateAvatar(data.avatarUrl);
      }
      if (data.gender) {
        await authAPI.updateGender(data.gender);
      }
      
      // Refresh user data
      await refreshUser();
    } catch (error: any) {
      console.error('Profile update error:', error);
      throw new Error(error.response?.data?.message || 'Profile update failed');
    }
  };

  const updateSyllabus = async (syllabus: string[], additionalData?: any) => {
    try {
      await authAPI.updateSyllabus(syllabus, additionalData?.language, additionalData?.dob, additionalData?.phoneNumber);
      
      // Refresh user data
      await refreshUser();
    } catch (error: any) {
      console.error('Syllabus update error:', error);
      throw new Error(error.response?.data?.message || 'Syllabus update failed');
    }
  };

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error('Logout API error:', error);
    } finally {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      setToken(null);
      setUser(null);
      console.log('Logout successful');
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
    updateProfile,
    updateSyllabus,
    checkAuthStatus,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};