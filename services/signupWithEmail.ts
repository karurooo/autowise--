// signupWithEmail.ts
import supabase from '~/utils/supabase';
import { passwordValidation } from '../utils/passwordValidation';
import { Router, router, useRouter } from 'expo-router';
import { calculateAge } from '~/utils/calculateAge';

export const signupWithEmail = async (
  {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    gender,
    birthday,
    street,
    barangay,
    city,
    age,
    province,
    zipCode,
    isChecked,
    phoneNumber,
  }: any,
  setErrorTitle: (title: string) => void,
  setErrorMessage: (message: string) => void,
  setIsVisible: (visible: boolean) => void,

  router: Router
) => {
  try {
    if (!passwordValidation(password)) {
      setErrorTitle('Error');
      setErrorMessage(
        'Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number'
      );
      setIsVisible(true);
      return;
    } else if (password !== confirmPassword) {
      setErrorTitle('Error');
      setErrorMessage('Passwords do not match.');
      setIsVisible(true);
      return;
    } else if (!isChecked) {
      setErrorTitle('Error');
      setErrorMessage('Please agree to the terms and conditions.');
      setIsVisible(true);
      return;
    }

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setErrorTitle('Error');
      setErrorMessage(signUpError.message);
      setIsVisible(true);
      return;
    }
    const age = calculateAge(birthday);

    const { data, error } = await supabase.from('users').insert([
      {
        first_name: firstName,
        last_name: lastName,
        gender,
        birthday,
        street,
        barangay,
        city,
        province,
        zip_code: zipCode,
        email,
        password,
        phone_number: phoneNumber,
        age,
      },
    ]);
    router.push('/verification');
  } catch (error) {
    setErrorTitle('Error');
    setErrorMessage('An unexpected error occurred.');
    setIsVisible(true);
  }
};
