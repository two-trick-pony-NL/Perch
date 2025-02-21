import { SafeAreaView } from 'react-native';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';


export default function Chat() {
  return (
    <SafeAreaView>
      <HStack>
        <Text className='text-2xl font-bold'>chat WORLD</Text>
    </HStack>
    </SafeAreaView>
  );
}
