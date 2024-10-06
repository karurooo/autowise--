import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';

import { Container } from '~/components/Container';
import { Button } from '~/components/Button';

export default function Signin() {
  const router = useRouter();
  const temp = () => {
    router.push('/signup');
  };
  return (
    <Container>
      <View className="items-center ">
        <Text className="text-2xl text-white"> Signin</Text>
        <Button title="Signin" onPress={temp} />
      </View>
    </Container>
  );
}
