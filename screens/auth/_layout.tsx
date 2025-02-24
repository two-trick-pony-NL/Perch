import { SafeAreaView, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import { Text } from '@/components/ui/text'; 
import { VStack } from '@/components/ui/vstack';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
          <VStack style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
            {/* Title Section */}
            <VStack space='md' style={{ alignItems: 'center' }}>
              <Text className="text-2xl font-bold">Let's log in to</Text>
            </VStack>

            {/* Content Section */}
            <VStack space='md' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {children}
            </VStack>

            {/* Optional Bottom Section (could be a footer or some other element) */}
            <VStack space='md' style={{ alignItems: 'center' }}>
              {/* Add footer or bottom content here if needed */}
            </VStack>
          </VStack>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AuthLayout;
