import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';

import { Container } from '~/components/Container';
import { Button } from '~/components/Button';

export default function GetStarted() {
  const router = useRouter();
  const getStarted = () => {
    router.push('/signin');
  };
  return (
    <Container>
      <View className=" my-10 items-center justify-center">
        <Image className="h-40 w-40" source={require('~/assets/Logo.png')} />
      </View>

      <View className="my-5 h-1/3 justify-center gap-5 ">
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
