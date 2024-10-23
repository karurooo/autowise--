import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

interface DropdownProps {
  label: string;
  options: { optionLabel: string; value: string }[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedValue,
  setSelectedValue,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setModalVisible(false);
  };

  return (
    <View className="my-2">
      <Text className="mb-2 text-lg font-semibold text-white">{label}</Text>

      {/* Dropdown Button */}
      <TouchableOpacity
        className="h-10  w-36 flex-row items-center justify-between rounded-lg border border-[#7E7E7E] p-1"
        onPress={() => setModalVisible(true)}
        activeOpacity={0.7}>
        <Text className="text-sm text-white">
          {options.find((option) => option.value === selectedValue)?.optionLabel || 'Select'}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#fff" />
      </TouchableOpacity>

      {/* Modal for options */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          className="flex-1 justify-center bg-black/40"
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}>
          <View className="mx-auto w-4/5 rounded-lg  bg-[#3E3E3E] p-4">
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="border-b border-gray-200 p-3"
                  onPress={() => handleSelect(item.value)}>
                  <Text className="text-lg text-white">{item.optionLabel}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
