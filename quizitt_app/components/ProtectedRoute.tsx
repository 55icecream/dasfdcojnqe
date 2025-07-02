import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireSurvey?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireAuth = true,
  requireSurvey = false,
}) => {
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      if (requireAuth && !user) {
        // User is not authenticated, redirect to login
        router.replace('/login/login');
        return;
      }

      if (user && requireSurvey && !user.surveyFilled) {
        // User is authenticated but hasn't filled survey, redirect to survey
        router.replace('/survey/survey1');
        return;
      }

      if (user && !requireSurvey && user.surveyFilled) {
        // User has filled survey but is on a survey page, redirect to dashboard
        router.replace('/dashboard/dashboardpage');
        return;
      }
    }
  }, [user, isLoading, requireAuth, requireSurvey]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#9C73F4" />
      </View>
    );
  }

  // If we don't require auth or user is authenticated, render children
  if (!requireAuth || user) {
    return <>{children}</>;
  }

  // This should not be reached due to the useEffect redirect
  return null;
}; 