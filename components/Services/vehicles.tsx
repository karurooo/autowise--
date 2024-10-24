import { FlatList, Modal, Pressable, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Dropdown } from '../Dropdown';
import { vehicleTypes } from '~/constants/vehicles';
import { useTowingStore } from '~/store/services';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function Vehicles() {
  const { vehicle, setVehicle } = useTowingStore();
  const [modalVisible, setModalVisible] = useState(false);
  const [userVehicle, setUserVehicle] = useState(''); // State to store user input

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleAddVehicle = () => {
    // You can implement logic to save the user's specific vehicle here
    setVehicle(userVehicle); // For example, setting it directly
    setModalVisible(false);
    setUserVehicle(''); // Clear the input after saving
  };

  return (
    <View className="my-2">
      <Dropdown
        label="Select Vehicle*"
        options={vehicleTypes}
        selectedValue={vehicle}
        setSelectedValue={setVehicle}
        style={{ height: 50, width: '100%' }}
      />

      {/* Button to open the modal */}
      <Pressable onPress={handleOpenModal} className="my-2 flex-row items-center">
        <Ionicons name="add-circle-outline" size={20} color="#FF7C06" />
        <Text className="text-md ml-2 text-[#FF7C06]">Add Vehicle</Text>
      </Pressable>

      {/* Modal for user input */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          className="flex-1 justify-center bg-black/40"
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}>
          <View className="mx-auto w-4/5 rounded-lg bg-[#3E3E3E] p-4">
            <Text className="mb-2 text-lg font-semibold text-white">Enter Your Vehicle</Text>

            <TextInput
              className="mb-2 rounded-md bg-white p-2"
              placeholder="Type your vehicle here"
              value={userVehicle}
              onChangeText={setUserVehicle}
            />

            <TouchableOpacity className="rounded-lg bg-[#FF7C06] p-3" onPress={handleAddVehicle}>
              <Text className="text-center font-semibold text-white">Save Vehicle</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
