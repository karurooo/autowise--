import { View, Text, Image } from 'react-native';
import { useRoleStore } from '~/store/roles';
import { useRouter } from 'expo-router';
import { Container } from '~/components/Container';
import { Button } from '~/components/Button';
import { LogoDesc } from '~/components/LogoDesc';

export default function RoleSelection() {
  const { setSelectedRole } = useRoleStore();
  const router = useRouter();

  const handleSelectRole = (roleId: number) => {
    setSelectedRole(roleId);
    // Redirect to appropriate signup page
    if (roleId === 1) {
      // 1 represents client role
      router.push('/signup');
    } else if (roleId === 2) {
      // 2 represents specialist role
      router.push('/signin');
    }
  };

  return (
    <Container>
      <View className="mx-2 h-1/2 justify-center">
        {/* <View className="my-2 flex-row">
          <Image className="mx-auto h-40 w-40" source={require('~/assets/images/Logo.png')} />
          <View className="w-1/2 justify-center">
            <Text className=" text-4xl font-bold text-white">
              Auto<Text className="fold-bold text-4xl text-[#CBB26A]">Wise</Text> {'\n'}
              <Text className="text-xl font-normal leading-normal ">
                The Easy Way to Find Auto Experts
              </Text>
            </Text>
          </View>
        </View> */}
        <LogoDesc />
        <Text className="mb-4 text-xl text-white">Select your role</Text>
        <Button title="Client" onPress={() => handleSelectRole(1)}></Button>
        <Button
          className="border border-[#7e7e7e] bg-transparent"
          title="Specialist"
          onPress={() => handleSelectRole(2)}></Button>
      </View>
    </Container>
  );
}
