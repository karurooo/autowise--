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
    const { error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: 'signup',
    });

    if (error) {
      setErrorTitle('Error');
      setErrorMessage('Error validating code:');
      setIsVisible(true);
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