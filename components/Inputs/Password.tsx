// components/Inputs/Password.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

interface PasswordFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View className="my-2">
      <Text className="mb-2 text-lg font-semibold text-white">{label}</Text>
      <View className="relative">
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={!isVisible}
          placeholderTextColor={'#7E7E7E'}
          className="w-full rounded-lg border border-[#7E7E7E] p-2 px-3 text-white"
        />
        <TouchableOpacity className="absolute right-5 top-3.5" onPress={toggleVisibility}>
          <Entypo name={isVisible ? 'eye' : 'eye-with-line'} size={24} color="#7E7E7E" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordField;
