import supabase from '~/utils/supabase';
import { useRouter } from 'expo-router';

export const signin = async (
  { email, password }: { email: string; password: string },
  setErrorTitle: (errorTitle: string) => void,
  setErrorMessage: (errorMessage: string) => void,
  setIsVisible: (errorVisible: boolean) => void,
  router: any
) => {
  try {
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setErrorTitle('Error');
      setErrorMessage(signInError.message);
      setIsVisible(true);
      console.log('Error signing in:', signInError.message);
      return;
    } else {
      router.push('/home');
    }
  } catch (error) {
    setErrorTitle('Error');
    setErrorMessage('Error signing in:');
    setIsVisible(true);
  }
};
