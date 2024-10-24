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
import { LogoDesc } from '~/components/LogoDesc';
import { useRoleStore } from '~/store/roles';
import { calculateAge } from '~/utils/calculateAge';

export default function Signup() {
  const {
    errorVisible,
    errorTitle,
    errorMessage,
    setErrorVisible,
    setErrorTitle,
    setErrorMessage,
  } = useErrorStore();

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
  const { selectedRole } = useRoleStore();

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
        role_id: selectedRole,
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
  const [birthdate, setBirthdate] = useState<Date>(new Date());

  const handleDateChange = (date: Date) => {
    setBirthdate(date); // Update local state
    setBirthday(date); // Update birthday in Zustand store
    const age = calculateAge(date); // Calculate age
    console.log('User age:', age); // Optionally, do something with the age
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={60}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="justify-center gap-2 py-2">
            <LogoDesc />
            <Text className="text-4xl font-bold text-white">Create an account</Text>
            <Text className=" text-xl text-white">Enter your account details</Text>

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

            <View className=" flex-row flex-wrap justify-start gap-20">
              <Dropdown
                label="Gender"
                options={genderOptions}
                selectedValue={gender}
                setSelectedValue={setGender}
                style={{ height: 35, width: 125 }}
              />
              <DatePicker
                label="Birthdate"
                initialDate={birthdate}
                onDateChange={handleDateChange} // Handle birthdate selection
              />
            </View>

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
            <Text className="mb-6  mt-3 text-center text-white">
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
