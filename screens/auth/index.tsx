import { SafeAreaView, StyleSheet } from 'react-native';
import { Text } from '@/components/ui/text';
import { useAuth } from '@/providers/AuthProvider';
import React from 'react';

export default function Login() {
  const { user, setUser } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Text className="text-2xl font-bold">Login</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure it takes the full screen height
    justifyContent: 'center', // Vertically center
    alignItems: 'center', // Horizontally center
  },
});
