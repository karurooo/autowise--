import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Container } from '~/components/Container';
import { Button } from '~/components/Button';
import { useRouter } from 'expo-router';
import { useAuth } from '~/hooks/useAuth';

export default function Home() {
  const { isLoading } = useAuth();

  if (isLoading) {
    <ActivityIndicator size="large" color="#0000ff" />;
  }
  const router = useRouter();

  return (
    <Container>
      <View className="my-4">
        <Text className="items-center justify-center text-2xl text-white">Home Page</Text>
      </View>
    </Container>
  );
}
