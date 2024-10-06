import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';

import { Container } from '~/components/Container';
import { Button } from '~/components/Button';

export default function GetStarted() {
  const router = useRouter();
  const getStarted = () => {
    router.push('/signup');
  };
  return (
    <Container>
      <Image className="mx-auto my-10 h-40 w-40" source={require('~/assets/Logo.png')} />

      <View className="my-5  justify-center gap-5 ">
        <Text className="my-4 text-6xl font-bold text-white">
          Auto<Text className="fold-bold text-6xl text-[#CBB26A]">Wise</Text> {'\n'}
          <Text className="text-4xl font-normal leading-normal ">
            Connecting You to Smart, Fast and Reliable{' '}
            <Text className="text-[#CBB26A]"> Roadside Assistance</Text>
          </Text>
        </Text>
        <Text className=" text-center text-lg font-bold text-white">Find help in minutes</Text>

        <Button title="Get Started" onPress={getStarted} />
      </View>
    </Container>
  );
}
