import { SafeAreaView } from 'react-native';
import { useAuth } from '@/providers/AuthProvider';
import React from 'react';
import { Input, InputField } from '@/components/ui/input';
import { Button, ButtonText } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { router } from 'expo-router';

export default function Login() {
  const { user } = useAuth();
  const [phone, setPhone] = React.useState('');
  
  
  const handleSignIn = async () => {
    console.log(phone)
    const { data, error } = await supabase.auth.signInWithOtp({
      phone: `+${phone}`,
    })
    if(!error) {
      router.push({
        pathname:'/(auth)/verify',
        params:{
          phone: `+${phone}`
        }      
      }
      );
    }
    console.log(data, error)
    

  }
  

  return (
    <SafeAreaView>
      <Input
        variant='outline'
        size='md'>
          <InputField 
          placeholder='Phone Number'
          value={phone}
          onChangeText={setPhone}
          keyboardType='phone-pad'
          />
        </Input>
        <Button onPress={handleSignIn} >
          <ButtonText>Sign in</ButtonText>
        </Button>
    </SafeAreaView>
  );
}
