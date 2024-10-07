import { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container } from '~/components/Container';
import OtpInput from '~/components/OtpInput';
import { validateCode } from '~/services/codeValidation';
import { Button } from '~/components/Button';
import { ErrorAlert } from '~/components/AlertModals/Error';
import { useErrorStore } from '~/store/alertModal';
import { useUserStore } from '~/store/users';

export default function Verification() {
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const { isVisible, errorTitle, errorMessage, setIsVisible, setErrorTitle, setErrorMessage } =
    useErrorStore();
  const { email } = useUserStore();

  const handleValidation = async () => {
    await validateCode(
      { otp, email },
      router,
      (title: string) => {},
      (message: string) => {},
      (visible: boolean) => {}
    );
  };

  return (
    <Container>
      <View className="my-4">
        <Text className="items-center justify-center text-2xl text-white"> Verification</Text>
        <OtpInput otp={otp} setOtp={setOtp} />
        <Button title="Verify" onPress={handleValidation} />
        <ErrorAlert
          title={errorTitle}
          message={errorMessage}
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
        />
      </View>
    </Container>
  );
}
