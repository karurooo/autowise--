import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';

import { Container } from '~/components/Container';
import { Button } from '~/components/Button';
import { LogoDesc } from '~/components/LogoDesc';

export default function GetStarted() {
  const router = useRouter();
  const getStarted = () => {
    router.push('/getStarted');
  };

  const toSignin = () => {
    router.push('/signin');
  };

  return (
    <Container>
      <View className="h-1/2 p-4">
        <View className=" items-end">
          <Button className="bg-transparent" title="Login" onPress={toSignin} />
        </View>

        <Image className="mx-auto h-40 w-40" source={require('~/assets/images/Logo.png')} />
        <Text className="my-4 text-6xl font-bold text-white">
          Auto<Text className="fold-bold text-6xl text-[#CBB26A]">Wise</Text> {'\n'}
          <Text className="text-4xl font-normal leading-normal ">
            The Easy Way to Find Auto Experts.
          </Text>
        </Text>
      </View>

      <View className="mx-2  h-1/2 justify-center  ">
        <Text className=" text-center text-lg font-bold text-white">Find help in minutes</Text>

        <Button title="Get Started" onPress={getStarted} />
      </View>
    </Container>
  );
}
