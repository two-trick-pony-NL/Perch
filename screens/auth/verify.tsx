import { SafeAreaView } from 'react-native';
import { useAuth } from '@/providers/AuthProvider';
import React from 'react';
import { Input, InputField } from '@/components/ui/input';
import { Button, ButtonText } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { router, useLocalSearchParams } from 'expo-router';
import { Text } from '@/components/ui/text';

export default function Verify() {
const [token, setToken] = React.useState('');
const {phone} = useLocalSearchParams();
const handleVerify = async () => {
  const { data, error } = await supabase.auth.verifyOtp({ phone: phone as string, token, type: 'sms'})
  if(!error) {
    router.push('/(auth)/username')
  }
  
}
  return (
    <SafeAreaView>
    <Text>VERIFY</Text>
      <Input
        variant='outline'
        size='md'>
          <InputField 
          placeholder='SMS Code'
          value={token}
          onChangeText={setToken}
          keyboardType='phone-pad'
          />
        </Input>
        <Button onPress={handleVerify} >
          <ButtonText>Sign in</ButtonText>
        </Button>
    </SafeAreaView>
  );
}
