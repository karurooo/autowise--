import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useErrorStore } from '~/store/alertModal';
import { Container } from '~/components/Container';
import { Button } from '~/components/Button';
import { ErrorAlert } from '~/components/AlertModals/Error';
import { getInputFields } from '~/constants/signupFields';
import TextInput from '~/components/Inputs/TextInput';
import Password from '~/components/Inputs/Password';
import DatePicker from '~/components/DatePicker';
import { genderOptions } from '~/constants/gender';
import { Dropdown } from '~/components/Dropdown';
import { useUserStore } from '~/store/users';
import TermsCondition from '~/components/TermsCondition';
import { signup } from '~/services/signup';
import { Link, useRouter } from 'expo-router';

export default function Signup() {
  const {
    errorVisible,
    errorTitle,
    errorMessage,
    setErrorVisible,
    setErrorTitle,
    setErrorMessage,
  } = useErrorStore();

  // Get user information from Zustand store
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    confirmPassword,
    gender,
    birthday,
    street,
    barangay,
    city,
    province,
    zipCode,
    setGender,
    setBirthday,
  } = useUserStore();
  const router = useRouter();

  const handleSignUp = async () => {
    if (age !== null && age < 18) {
      setErrorTitle('Age Restriction');
      setErrorMessage('You must be at least 18 years old to sign up.');
      setErrorVisible(true);
      return;
    }
    await signup(
      {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        confirmPassword,
        gender,
        birthday,
        street,
        barangay,
        city,
        age,
        province,
        zipCode,
        isChecked,
      },
      setErrorTitle,
      setErrorMessage,
      setErrorVisible,
      router
    );
  };

  const fields = getInputFields();
  const passwordFields = fields.filter((field) => field.secureTextEntry);
  const otherFields = fields.filter((field) => !field.secureTextEntry);
  const [isChecked, setIsChecked] = useState(false);
  const [age, setAge] = useState<number | null>(null);

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={60}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="justify-center py-10">
            <Text className="text-4xl font-bold text-white">Create an account</Text>
            <Text className="mb-10 text-xl text-white">Enter your account details</Text>

            {otherFields.map((field, index) => (
              <View key={index} className="my-2">
                <TextInput
                  label={field.label}
                  value={field.value}
                  onChangeText={field.onChangeText}
                  placeholder={field.placeholder}
                />
              </View>
            ))}

            <Dropdown
              label="Gender"
              options={genderOptions}
              selectedValue={gender}
              setSelectedValue={setGender}
            />
            <DatePicker label="Date of Birth" onDateChange={setBirthday} />

            {passwordFields.map((field, index) => (
              <View key={index} className="my-2">
                <Password
                  label={field.label}
                  value={field.value}
                  onChangeText={field.onChangeText}
                  placeholder={field.placeholder}
                />
              </View>
            ))}

            <TermsCondition isChecked={isChecked} setIsChecked={setIsChecked} />
            <View className="my-3 flex flex-row justify-between">
              <Text className="my-2  h-0.5 w-full bg-white"></Text>
              {/* <Text className="my-2  h-1 w-2/5 bg-white"></Text> */}
            </View>
            <Button title="Signup" onPress={handleSignUp} />
            <Text className="mt-3 text-center text-white">
              Already have an account?{' '}
              <Link href="/signin" asChild>
                <Text className="text-[#1279F2]">Login</Text>
              </Link>
            </Text>
            <ErrorAlert
              errorTitle={errorTitle}
              errorMessage={errorMessage}
              errorVisible={errorVisible}
              onClose={() => setErrorVisible(false)}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}
