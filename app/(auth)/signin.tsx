import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';

import { Container } from '~/components/Container';
import { Button } from '~/components/Button';
import InputText from '~/components/Inputs/TextInput';
import Password from '~/components/Inputs/Password';
import { useUserStore } from '~/store/users';
import { signin } from '~/services/signin';
import { useErrorStore } from '~/store/alertModal';
import { ErrorAlert } from '~/components/AlertModals/Error';

export default function Signin() {
  const router = useRouter();
  const { email, password, setEmail, setPassword } = useUserStore();
  const {
    errorVisible,
    errorTitle,
    errorMessage,
    setErrorVisible,
    setErrorTitle,
    setErrorMessage,
  } = useErrorStore();
  const handleSignin = async () => {
    await signin({ email, password }, setErrorTitle, setErrorMessage, setErrorVisible, router);
  };

  const toSignup = () => {
    router.push('/signup');
  };

  return (
    <Container>
      <View className="my-4">
        <View className="h-1/2 justify-center ">
          <Text className="my-4 text-3xl font-bold text-white">Welcome!</Text>
          <InputText
            label="Email"
            value={email}
            placeholder="Enter your email"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <Password
            label={'Password'}
            value={password}
            placeholder="Password"
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <Button title="Signin" onPress={handleSignin} />
        </View>

        <View className="h-1/2 justify-end">
          <View className="my-3 flex flex-row justify-between">
            <Text className="my-2  h-0.5 w-full bg-white"></Text>
            {/* <Text className="my-2  h-1 w-2/5 bg-white"></Text> */}
          </View>

          <Button
            className=" border-2 border-[#7E7E7E] bg-transparent"
            title="Signup"
            onPress={toSignup}
          />
        </View>
        <ErrorAlert
          errorTitle={errorTitle}
          errorMessage={errorMessage}
          errorVisible={errorVisible}
          onClose={() => setErrorVisible(false)}
        />
      </View>
    </Container>
  );
}
