import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';

interface OtpInputProps {
  otp: string;
  setOtp: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ otp, setOtp }) => {
  const pinLength = 6;
  const [pin, setPin] = useState<string[]>(new Array(pinLength).fill(''));
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleInputChange = (text: string, index: number) => {
    // Ensure only numbers are entered
    const newText = text.replace(/[^0-9]/g, '');

    // If the user pastes a whole code, split it across the inputs
    if (newText.length > 1) {
      const newPin = newText.slice(0, pinLength).split('');
      setPin(newPin);

      // Update OTP in Zustand store
      setOtp(newPin.join(''));

      // Focus on the last input
      inputRefs.current[pinLength - 1]?.focus();
    } else {
      // Update the pin array for single digit input
      const newPin = [...pin];
      newPin[index] = newText;
      setPin(newPin);

      // Move to the next input if the text is valid
      if (newText && index < pinLength - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      // Update OTP in Zustand store
      setOtp(newPin.join(''));
    }
  };

  const handleKeyPress = (nativeEvent: any, index: number) => {
    if (nativeEvent.key === 'Backspace' && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus(); // Move back on empty and backspace
    }
  };
  return (
    <View className="my-10 flex flex-row justify-center">
      {pin.map((digit, index) => (
        <TextInput
          key={index}
          className="mx-2 h-12 w-12 rounded-lg border-2 border-white text-center text-white"
          value={digit}
          onChangeText={(text) => handleInputChange(text, index)}
          keyboardType="number-pad"
          maxLength={1}
          ref={(ref) => (inputRefs.current[index] = ref)}
          onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent, index)}
        />
      ))}
    </View>
  );
};

export default OtpInput;
