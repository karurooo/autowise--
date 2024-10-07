import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';
import { Container } from '~/components/Container';
import OtpInput from '~/components/OtpInput';
import { validateCode } from '~/services/codeValidation';
import { Button } from '~/components/Button';
import { ErrorAlert } from '~/components/AlertModals/Error';
import { useErrorStore, useSuccessStore } from '~/store/alertModal';
import { useUserStore } from '~/store/users';
import { useResendCodeTimer } from '~/utils/timer';
import { resendCode } from '~/services/resendCode';
import { SuccessAlert } from '~/components/AlertModals/Success';

export default function Verification() {
  const { timer, resetTimer } = useResendCodeTimer(60);
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const { errorVisible, errorTitle, errorMessage, setErrorVisible } = useErrorStore();
  const {
    successTitle,
    successMessage,
    successVisible,
    setSuccessVisible,
    setSuccessTitle,
    setSuccessMessage,
  } = useSuccessStore();
  const { email } = useUserStore();
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
    }
  }, [timer]);

  const handleValidation = async () => {
    await validateCode(
      { otp, email },
      router,
      (title: string) => {},
      (message: string) => {},
      (visible: boolean) => {}
    );
  };

  const handleResendCode = async () => {
    setCanResend(false);
    resetTimer();
    await resendCode(
      { email },
      (errorTitle: string) => {}, // Error handling
      (errorMessage: string) => {},
      (errorVisible: boolean) => {},
      setSuccessTitle, // Pass the correct functions
      setSuccessMessage,
      setSuccessVisible
    );
  };
  return (
    <Container>
      <View className="my-4 justify-center">
        <View className="h-1/2">
          <Text className="my-4 text-center text-3xl font-bold text-white">
            Enter Confirmation Code
          </Text>
          <Text className="text-center text-lg font-normal text-white">
            A 6-digit code was sent to {'\n'} {email}
          </Text>
          <OtpInput otp={otp} setOtp={setOtp} />
          <Text className=" text-center text-[#7e7e7e]">
            {timer > 0 ? `Resend code in ${timer}s` : 'You can resend the code now.'}
          </Text>
        </View>

        <View className="h-1/2 justify-end py-4 ">
          {canResend && (
            <Text
              onPress={handleResendCode}
              className="text-md text-center font-bold text-blue-500">
              Resend Code
            </Text>
          )}
          <Button title="Verify" onPress={handleValidation} />
        </View>

        <ErrorAlert
          errorTitle={errorTitle}
          errorMessage={errorMessage}
          errorVisible={errorVisible}
          onClose={() => setErrorVisible(false)}
        />
        <SuccessAlert
          successTitle={successTitle}
          successMessage={successMessage}
          successVisible={successVisible}
          onClose={() => setSuccessVisible(false)}
        />
      </View>
    </Container>
  );
}
