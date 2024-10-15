import { Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';

export const BackButton = () => {
  const navigation = useNavigation();
  const Back = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity className="h-8 w-8" onPress={Back}>
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
  );
};
