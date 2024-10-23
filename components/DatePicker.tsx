import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

interface DatePickerProps {
  label: string;
  initialDate?: Date;
  onDateChange: (date: Date) => void;
  mode?: 'date' | 'time' | 'datetime';
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  initialDate = new Date(),
  onDateChange,
  mode = 'date', // Default mode is 'date'
}) => {
  const [date, setDate] = useState<Date>(initialDate);
  const [show, setShow] = useState<boolean>(false);
  const [isDateSelected, setIsDateSelected] = useState<boolean>(false);

  // Handles date/time change from DateTimePicker
  const onChange = (event: any, selectedDate?: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setIsDateSelected(true);
    onDateChange(currentDate);
  };

  // Function to display the DateTimePicker
  const showPicker = () => {
    setShow(true);
  };

  return (
    <View className="my-2">
      <Text className="mb-2 text-lg font-semibold text-white">{label}</Text>
      <TouchableOpacity
        className="h-10  w-36  flex-row items-center justify-between rounded-lg border border-[#7E7E7E] p-1"
        onPress={showPicker}>
        <Text className="text-sm text-[#7e7e7e]">
          {isDateSelected
            ? mode === 'time'
              ? date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
              : date.toLocaleDateString()
            : 'Select Date'}
        </Text>

        <Ionicons name={mode === 'time' ? 'time' : 'calendar'} size={20} color="#fff" />
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date || new Date()} // Ensure value is always valid Date
          mode={mode} // Can be 'date', 'time', or 'datetime'
          display="default"
          onChange={onChange} // Trigger when date/time is selected
        />
      )}
    </View>
  );
};
export default DatePicker;
