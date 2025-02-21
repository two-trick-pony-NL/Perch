import { SafeAreaView } from 'react-native';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';


export default function Profile() {
  return (
    <SafeAreaView>
      <HStack>
        <Text className='text-2xl font-bold'>Profile WORLD</Text>
    </HStack>
    </SafeAreaView>
  );
}
