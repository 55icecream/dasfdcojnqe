import { Stack, useRouter, useSegments } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { View, ActivityIndicator } from "react-native";
import { useEffect } from "react";

// function RootLayoutNav() {
//   const { isLoading } = useAuth();
//   const router = useRouter();
//   const segments = useSegments();

//   useEffect(() => {
//     // Only redirect if on the root route and not already on /profile/profile
//     if (segments[0] === undefined || segments[0] === "(tabs)") {
//       router.replace("/profile/profile");
//     }
//   }, [segments]);

//   if (isLoading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" color="#9C73F4" />
//       </View>
//     );
//   }

//   return (
//     <Stack
//       screenOptions={{
//         headerShown: false,
//       }}
//     />
//   );
// }

// export default function RootLayout() {
//   return (
//     <AuthProvider>
//       <RootLayoutNav />
//     </AuthProvider>
//   );
// }

function RootLayoutNav() {
  const { isLoading, user } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (isLoading) return;
    // Only redirect if user is authenticated and on the root route
    if ((segments[0] === undefined || segments[0] === "(tabs)") && user) {
      router.replace("/profile/profile");
    }
  }, [isLoading, segments, user, router]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#9C73F4" />
      </View>
    );
  }

  // once loading is done, the Stack is mounted and safe to navigate
  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
