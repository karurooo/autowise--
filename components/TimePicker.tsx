import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

interface TimePickerProps {
  label: string;
  initialTime?: Date;
  onTimeChange: (time: Date) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({
  label,
  initialTime = new Date(), // Default to current time
  onTimeChange,
}) => {
  const [time, setTime] = useState<Date>(initialTime);
  const [show, setShow] = useState<boolean>(false);
  const [isTimeSelected, setIsTimeSelected] = useState<boolean>(false);

  // Handles time change from DateTimePicker
  const onChange = (event: any, selectedTime?: Date | undefined) => {
    const currentTime = selectedTime || time;
    setShow(Platform.OS === 'ios');
    setTime(currentTime);
    setIsTimeSelected(true);
    onTimeChange(currentTime);
  };

  const showPicker = () => {
    setShow(true);
  };

  return (
    <View className="my-2">
      <Text className="mb-2 text-lg font-semibold text-white">{label}</Text>
      <TouchableOpacity
        className="h-10 w-36  flex-row items-center justify-between rounded-lg border border-[#7E7E7E] p-1"
        onPress={showPicker}>
        <Text className="text-sm text-[#7e7e7e]">
          {isTimeSelected
            ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
            : 'Select Time'}
        </Text>

        <Ionicons name="time" size={20} color="#fff" />
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={time || new Date()} // Ensure value is always a valid Date
          mode="time" // Fixed to 'time' for this component
          display="default"
          onChange={onChange} // Trigger when time is selected
        />
      )}
    </View>
  );
};
export default TimePicker;
