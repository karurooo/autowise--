import { TextInput, TextInputProps, Text, View } from 'react-native';

interface InputText extends TextInputProps {
  label: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

const InputText: React.FC<InputText> = ({ label, value, placeholder, onChangeText }) => {
  return (
    <View className="flex flex-col">
      <Text className="mb-1 text-lg font-semibold text-white">{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'#7E7E7E'}
        className="w-full rounded-lg border border-[#7E7E7E] p-2 px-3 text-white"
      />
    </View>
  );
};

export default InputText;
