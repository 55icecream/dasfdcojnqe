import { Stack, useRouter, useSegments } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { View, ActivityIndicator } from "react-native";
import { useEffect, useRef } from "react";

function RootLayoutNav() {
  const { isLoading, user } = useAuth();
  const router = useRouter();
  const segments = useSegments();
  const navigationRef = useRef(false);

  useEffect(() => {
    if (isLoading) return;

    const currentPath = segments.join('/');
    console.log('Navigation check - Current path:', currentPath);
    console.log('Navigation check - User:', user ? 'authenticated' : 'not authenticated');
    console.log('Navigation check - Email verified:', user?.emailVerified);
    console.log('Navigation check - Survey filled:', user?.surveyFilled);

    // Prevent multiple simultaneous navigations
    if (navigationRef.current) return;

    // If user is authenticated
    if (user) {
      // Check if user has verified email
      if (!user.emailVerified) {
        if (currentPath !== 'email-verification/email-verification') {
          console.log('Redirecting to email verification');
          navigationRef.current = true;
          router.replace('/email-verification/email-verification');
          setTimeout(() => { navigationRef.current = false; }, 1000);
        }
        return;
      }

      // Check if user has completed survey
      if (!user.surveyFilled) {
        if (currentPath !== 'survey/survey1') {
          console.log('Redirecting to survey');
          navigationRef.current = true;
          router.replace('/survey/survey1');
          setTimeout(() => { navigationRef.current = false; }, 1000);
        }
        return;
      }

      // User is fully authenticated and has completed onboarding
      // Redirect to dashboard if on auth pages
      if (
        currentPath === '' || 
        currentPath === 'login/login' || 
        currentPath === 'signup/signup' ||
        currentPath === 'email-verification/email-verification' ||
        currentPath.startsWith('survey/')
      ) {
        console.log('Redirecting authenticated user to dashboard');
        navigationRef.current = true;
        router.replace('/dashboard/dashboardpage');
        setTimeout(() => { navigationRef.current = false; }, 1000);
      }
    } else {
      // User is not authenticated
      // Redirect to login if not on auth pages
      if (
        currentPath !== 'login/login' && 
        currentPath !== 'signup/signup' &&
        currentPath !== ''
      ) {
        console.log('Redirecting unauthenticated user to login');
        navigationRef.current = true;
        router.replace('/login/login');
        setTimeout(() => { navigationRef.current = false; }, 1000);
      }
    }
  }, [isLoading, user?.emailVerified, user?.surveyFilled, segments.join('/')]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#222B40" }}>
        <ActivityIndicator size="large" color="#9C73F4" />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}