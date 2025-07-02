import { Stack, useRouter, useSegments } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { View, ActivityIndicator } from "react-native";
import { useEffect } from "react";

function RootLayoutNav() {
  const { isLoading, user } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (isLoading) return;

    const currentPath = segments.join('/');
    console.log('Current path:', currentPath);
    console.log('User:', user);

    // If user is authenticated
    if (user) {
      // Check if user has verified email
      if (!user.emailVerified) {
        if (currentPath !== 'email-verification/email-verification') {
          console.log('Redirecting to email verification');
          router.replace('/email-verification/email-verification');
        }
        return;
      }

      // Check if user has completed survey
      if (!user.surveyFilled) {
        if (currentPath !== 'survey/survey1') {
          console.log('Redirecting to survey');
          router.replace('/survey/survey1');
        }
        return;
      }

      // User is fully authenticated and has completed onboarding
      // Redirect to dashboard if on root or auth pages
      if (
        currentPath === '' || 
        currentPath === 'login/login' || 
        currentPath === 'signup/signup' ||
        currentPath === 'email-verification/email-verification' ||
        currentPath.startsWith('survey/')
      ) {
        console.log('Redirecting authenticated user to dashboard');
        router.replace('/dashboard/dashboardpage');
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
        router.replace('/login/login');
      }
    }
  }, [isLoading, segments, user, router]);

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