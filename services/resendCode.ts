import supabase from '~/utils/supabase';

export const resendCode = async (
  { email }: { email: string },
  setErrorTitle: (errorTitle: string) => void,
  setErrorMessage: (errorMessage: string) => void,
  setErrorVisible: (errorVisible: boolean) => void,
  setSuccessTitle: (successTitle: string) => void,
  setSuccessMessage: (successMessage: string) => void,
  setSuccessVisible: (successVisible: boolean) => void
) => {
  try {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      setErrorTitle('Error');
      setErrorMessage(error.message);
      setErrorVisible(true);
    } else {
      setSuccessTitle('Code Resent');
      setSuccessMessage('Please check your inbox for the new code!');
      setSuccessVisible(true);
    }
  } catch (error) {
    setErrorTitle('Error');
    setErrorMessage('Failed to resend code');
    setErrorVisible(true);
  }
};
