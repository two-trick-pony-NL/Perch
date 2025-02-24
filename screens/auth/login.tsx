import { useAuth } from '@/providers/AuthProvider'; // Auth provider
import React from 'react';
import { Input, InputField } from '@/components/ui/input'; // Custom input components
import { Button, ButtonText } from '@/components/ui/button'; // Custom button components
import { supabase } from '@/lib/supabase'; // Supabase client
import { router } from 'expo-router'; // Router for navigation
import AuthLayout from './_layout';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

export default function Login() {
  const { user } = useAuth();
  const [phone, setPhone] = React.useState('');

  const handleSignIn = async () => {
    console.log(phone);
    const { data, error } = await supabase.auth.signInWithOtp({
      phone: `+${phone}`,
    });
    if (!error) {
      router.push({
        pathname: '/(auth)/verify',
        params: {
          phone: `+${phone}`,
        },
      });
    }
    console.log(data, error);
  };

  return (
    <AuthLayout>
      <Text>What's your phone number?</Text>
      <VStack className='items-center justify-center p-3'>
      <Input variant="outline" size="md">
        <InputField
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </Input>
      <Button onPress={handleSignIn} className='mt-4 rounded-xl'>
        <ButtonText>Sign in</ButtonText>
      </Button>
      </VStack>
    </AuthLayout>
  );
}
