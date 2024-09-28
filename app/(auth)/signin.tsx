import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';

import { Container } from '~/components/Container';
import { Button } from '~/components/Button';

export default function Signin() {
  return (
    <Container>
      <View className="items-center ">
        <Text className="text-2xl text-white"> Signin</Text>
      </View>
    </Container>
  );
}
