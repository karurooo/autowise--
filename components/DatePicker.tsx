import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { useUserStore } from '~/store/users';
import { calculateAge } from '~/utils/calculateAge'; // Import the age calculator utility

interface DatePickerProps {
  label: string;
  onDateChange: (date: Date, age: number) => void; // Modified to pass both date and age
}

const DatePicker: React.FC<DatePickerProps> = ({ label, onDateChange }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);
  const setBirthday = useUserStore((state) => state.setBirthday);

  // Handles date change
  const onChange = (event: any, selectedDate?: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setBirthday(currentDate); // Set birthday in the Zustand store as Date object

    const age = calculateAge(currentDate); // Calculate the user's age
    onDateChange(currentDate, age); // Pass both date and calculated age to parent component
  };

  // Shows the date picker
  const showDatepicker = () => {
    setShow(true);
  };
  return (
    <View className="my-2">
      <Text className="mb-2 text-lg font-semibold text-white">{label}</Text>
      <TouchableOpacity
        className="flex-row items-center justify-between rounded-lg  border border-[#7E7E7E] p-3"
        onPress={showDatepicker}>
        <Text className="text-lg text-white">{date.toLocaleDateString()}</Text>
        <Ionicons name="calendar" size={20} color="#fff" />
      </TouchableOpacity>
      {show && <DateTimePicker value={date} mode="date" display="default" onChange={onChange} />}
    </View>
  );
};

export default DatePicker;
