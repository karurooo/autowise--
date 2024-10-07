import { View, Text, TouchableOpacity } from 'react-native';
import { Container } from '~/components/Container';

export default function Onboarding() {
  return (
    <Container>
      <View className="my-4">
        <Text className="items-center justify-center text-2xl text-white">Onboarding</Text>
      </View>
    </Container>
  );
}
