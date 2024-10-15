import { View, Text, Image } from 'react-native';

export const LogoDesc = () => {
  return (
    <View className="my-2 flex-row">
      <Image className="mx-auto h-40 w-40" source={require('~/assets/images/Logo.png')} />
      <View className="w-1/2 justify-center">
        <Text className=" text-4xl font-bold text-white">
          Auto<Text className="fold-bold text-4xl text-[#CBB26A]">Wise</Text> {'\n'}
          <Text className="text-xl font-normal leading-normal ">
            The Easy Way to Find Auto Experts
          </Text>
        </Text>
      </View>
    </View>
  );
};
