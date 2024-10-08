import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Container } from '~/components/Container';
import { Button } from '~/components/Button';
import { useRouter } from 'expo-router';
import { useAuth } from '~/hooks/useAuth';

export default function Settings() {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  if (isLoading) {
    <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <Container>
      <View className="my-4">
        <Text className="items-center justify-center text-2xl text-white">Settings Page</Text>
      </View>
    </Container>
  );
}
