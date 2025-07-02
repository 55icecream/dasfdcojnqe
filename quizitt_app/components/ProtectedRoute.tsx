import React, { useEffect, useRef } from 'react';
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
  const navigationRef = useRef(false);

  useEffect(() => {
    if (isLoading || navigationRef.current) return;

    if (requireAuth && !user) {
      // User is not authenticated, redirect to login
      navigationRef.current = true;
      router.replace('/login/login');
      setTimeout(() => { navigationRef.current = false; }, 1000);
      return;
    }

    if (user && requireSurvey && !user.surveyFilled) {
      // User is authenticated but hasn't filled survey, redirect to survey
      navigationRef.current = true;
      router.replace('/survey/survey1');
      setTimeout(() => { navigationRef.current = false; }, 1000);
      return;
    }

    if (user && !requireSurvey && user.surveyFilled) {
      // User has filled survey but is on a survey page, redirect to dashboard
      navigationRef.current = true;
      router.replace('/dashboard/dashboardpage');
      setTimeout(() => { navigationRef.current = false; }, 1000);
      return;
    }
  }, [user, isLoading, requireAuth, requireSurvey]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#222B40' }}>
        <ActivityIndicator size="large" color="#9C73F4" />
      </View>
    );
  }

  // If we don't require auth or user is authenticated, render children
  if (!requireAuth || user) {
    return <>{children}</>;
  }

  // This should not be reached due to the useEffect redirect
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#222B40' }}>
      <ActivityIndicator size="large" color="#9C73F4" />
    </View>
  );
};