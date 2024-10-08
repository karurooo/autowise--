// components/TermsCondition.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

interface TermsConditionProps {
  isChecked: boolean;
  setIsChecked: (checked: boolean) => void;
}

const TermsCondition: React.FC<TermsConditionProps> = ({ isChecked, setIsChecked }) => {
  const handleLinkPress = () => {
    // Handle link press, e.g., navigate to terms and conditions page
    console.log('Link to terms and conditions pressed');
  };

  return (
    <View className="flex h-24 flex-row items-center">
      <CheckBox
        checked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
        checkedColor="#F8A961"
        uncheckedColor="#FFFFFF"
      />
      <Text className="ml-2 text-start text-white">
        By creating an account I agree to the terms and conditions of our{' '}
        <Text className="text-[#F8A961]" onPress={handleLinkPress}>
          Service, Payments, Terms of Service, Privacy Policy.
        </Text>
      </Text>
    </View>
  );
};

export default TermsCondition;
