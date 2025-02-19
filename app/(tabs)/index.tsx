import { SafeAreaView } from 'react-native';
import { HStack } from '@/components/ui/hstack';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';


export default function HomeScreen() {
  return (
    <SafeAreaView>
      <HStack>
        <Text className='text-2xl font-bold'>HELLO WORLD</Text>
    </HStack>
    </SafeAreaView>
  );
}
