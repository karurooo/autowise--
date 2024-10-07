import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';
import supabase from '~/utils/supabase';

export const validateCode = async (
  { otp, email }: { otp: string; email: string },
  router: any,
  setErrorTitle: (title: string) => void,
  setErrorMessage: (message: string) => void,
  setIsVisible: (visible: boolean) => void
) => {
  try {
    console.log('Verifying OTP with email:', email);
    console.log('OTP entered:', otp);
    const { error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: 'signup',
    });

    if (error) {
      setErrorTitle('Error');
      setErrorMessage('Error validating code:');
      setIsVisible(true);
      console.log('Error validating code:', error.message);
      return;
    } else {
      router.push('/onboarding');
    }
  } catch (error) {
    setErrorTitle('Error');
    setErrorMessage('Error validating code:');
    setIsVisible(true);
  }
};
