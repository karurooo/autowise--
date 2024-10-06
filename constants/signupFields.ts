// constants/signupFields.ts
import { useUserStore } from '~/store/users';

interface InputField {
  label: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export const getInputFields = (): InputField[] => {
  const {
    firstName,
    lastName,
    email,
    age,
    street,
    barangay,
    city,
    province,
    zipCode,
    phoneNumber,
    password,
    confirmPassword,
    setFirstName,
    setLastName,
    setEmail,
    setStreet,
    setBarangay,
    setCity,
    setProvince,
    setZipCode,
    setPhoneNumber,
    setPassword,
    setConfirmPassword,
  } = useUserStore();

  return [
    {
      label: 'First Name',
      value: firstName,
      placeholder: 'First Name',
      onChangeText: setFirstName,
      secureTextEntry: false,
    },
    {
      label: 'Last Name',
      value: lastName,
      placeholder: 'Last Name',
      onChangeText: setLastName,
      secureTextEntry: false,
    },
    {
      label: 'Email',
      value: email,
      placeholder: 'Email',
      onChangeText: setEmail,
      secureTextEntry: false,
    },
    {
      label: 'Phone Number',
      value: phoneNumber,
      placeholder: 'Phone Number',
      onChangeText: setPhoneNumber,
      secureTextEntry: false,
    },
    {
      label: 'Street',
      value: street,
      placeholder: 'Street',
      onChangeText: setStreet,
      secureTextEntry: false,
    },
    {
      label: 'Barangay',
      value: barangay,
      placeholder: 'Barangay',
      onChangeText: setBarangay,
      secureTextEntry: false,
    },
    {
      label: 'City/Municipality',
      value: city,
      placeholder: 'City/Municipality',
      onChangeText: setCity,
      secureTextEntry: false,
    },
    {
      label: 'Province',
      value: province,
      placeholder: 'Province',
      onChangeText: setProvince,
      secureTextEntry: false,
    },
    {
      label: 'Zip Code',
      value: zipCode,
      placeholder: 'Zip Code',
      onChangeText: setZipCode,
      secureTextEntry: false,
    },

    {
      label: 'Password',
      value: password,
      placeholder: 'Password',
      onChangeText: setPassword,
      secureTextEntry: true,
    },
    {
      label: 'Confirm Password',
      value: confirmPassword,
      placeholder: 'Confirm Password',
      onChangeText: setConfirmPassword,
      secureTextEntry: true,
    },
  ];
};
