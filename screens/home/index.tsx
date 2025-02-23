import { SafeAreaView } from 'react-native';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { useAuth } from '@/providers/AuthProvider';

export default function Home() {
  const {logout } = useAuth();
  return (
    <SafeAreaView>
      <HStack>
        <Text className='text-2xl font-bold'>Home WORLD</Text>
        <Button onPress={logout}>
          <ButtonText>Log out</ButtonText>
        </Button>
    </HStack>
    </SafeAreaView>
  );
}
