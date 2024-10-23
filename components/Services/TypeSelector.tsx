import { Ionicons } from '@expo/vector-icons';
import { View, Text, Pressable } from 'react-native';

// Define props interface
interface ServiceTypeSelectorProps {
  selected: string; // Selected service type, e.g., 'Now' or 'Later'
  onSelect: (type: string) => void; // Function to handle selection
}

const ServiceTypeSelector: React.FC<ServiceTypeSelectorProps> = ({ selected, onSelect }) => {
  return (
    <View className="my-4 ">
      <View className="flex-col gap-4 ">
        {/* "Now" Option */}
        <Pressable onPress={() => onSelect('Now')} className="flex-row items-center">
          <Ionicons
            name={selected === 'Now' ? 'radio-button-on' : 'radio-button-off'}
            size={20}
            color={selected === 'Now' ? '#FFFFFF' : '#6B7280'} // White for selected, gray for unselected
          />
          <Text className={`ml-2 ${selected === 'Now' ? 'font-bold text-white' : 'text-gray-600'}`}>
            Now
          </Text>
        </Pressable>

        {/* "Later" Option */}
        <Pressable onPress={() => onSelect('Later')} className="flex-row items-center">
          <Ionicons
            name={selected === 'Later' ? 'radio-button-on' : 'radio-button-off'}
            size={20}
            color={selected === 'Later' ? '#FFFFFF' : '#6B7280'} // White for selected, gray for unselected
          />
          <Text
            className={`ml-2 ${selected === 'Later' ? 'font-bold text-white' : 'text-gray-600'}`}>
            Later
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ServiceTypeSelector;
