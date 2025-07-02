import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Make sure you're using expo-router

export default function HomePageScreen() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("../profile/profile");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello Abhay 🫥!</Text>
      <TouchableOpacity onPress={handleNavigation} style={{ padding: 12, backgroundColor: '#9C73F4', borderRadius: 8 }}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
});

