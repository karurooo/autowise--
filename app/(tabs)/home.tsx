import { View, Text, ActivityIndicator } from 'react-native';
import { Container } from '~/components/Container';
import { useRouter } from 'expo-router';
import { useAuth } from '~/hooks/useAuth';
import Drawer from '~/components/Burger';
import Services from '~/components/Services';
import { servicesDetails } from '~/constants/services';

export default function Home() {
  const { isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const handlePress = (serviceRoute: any) => {
    router.push(serviceRoute);
  };
  return (
    <Container>
      <Drawer />
      <View className="my-4">
        <View className="my-2 h-1/2 justify-center">
          <View className="my-4 h-1/2 justify-center">
            <Text className="text-3xl font-bold text-white">
              Welcome to Auto
              <Text className="fold-bold text-3xl text-[#CBB26A]">Wise</Text>
            </Text>
            <Text className="text-lg font-normal leading-normal text-white">
              Your smart and reliable roadside assistant
            </Text>
          </View>
        </View>

        {/* Services Grid */}
        <View className="mr-4 flex-row flex-wrap">
          {servicesDetails.map((service, index) => (
            <View key={index} className="w-1/2 p-2">
              <Services
                title={service.name}
                image={service.image}
                onPress={() => {
                  handlePress(service.route);
                }}
              />
            </View>
          ))}
        </View>
      </View>
    </Container>
  );
}
