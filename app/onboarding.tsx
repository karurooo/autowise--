import { View, Text, TouchableOpacity } from 'react-native';
import { Container } from '~/components/Container';
import { Button } from '~/components/Button';
import { useRouter } from 'expo-router';

export default function Onboarding() {
  const router = useRouter();

  return (
    <Container>
      <View className="my-4">
        <Text className="items-center justify-center text-2xl text-white">Onboarding</Text>
      </View>
    </Container>
  );
}
