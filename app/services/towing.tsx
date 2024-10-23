import { View, Text } from 'react-native';
import { useState } from 'react';
import { Container } from '~/components/Container';
import { useRouter } from 'expo-router';
import { BackButton } from '~/components/BackBtn';
import ServiceTypeSelector from '~/components/Services/TypeSelector';
import DatePicker from '~/components/DatePicker';
import { useTowingStore } from '~/store/services';
import TimePicker from '~/components/TimePicker';

export default function Towing() {
  const router = useRouter();

  const [scheduledDate, setScheduledDate] = useState<Date>(new Date());
  const [scheduledTime, setScheduledTime] = useState<Date>(new Date());
  const [serviceType, setServiceType] = useState<string>('Now');

  const setServiceDate = useTowingStore((state) => state.setScheduledDate);
  const setServiceTime = useTowingStore((state) => state.setScheduledTime);

  const handleDateChange = (date: Date) => {
    setScheduledDate(date); // Update local state
    setServiceDate(date.toISOString().split('T')[0]);
  };

  const handleTimeChange = (time: Date) => {
    setScheduledTime(time); // Update local state
    const formattedTime = time.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    setServiceTime(formattedTime);
  };

  const handleServiceTypeChange = (type: string) => {
    setServiceType(type);
    if (type === 'Now') {
      const currentDate = new Date();
      setScheduledDate(currentDate);
      setServiceDate(currentDate.toISOString().split('T')[0]);

      const currentTime = currentDate;
      setScheduledTime(currentTime);
      const formattedTime = currentTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setServiceTime(formattedTime); // Save current time in Zustand store
    }
  };

  return (
    <Container>
      <View className="h-1/2  py-4">
        <BackButton />
        <View className="my-2">
          <Text className="text-2xl font-bold text-white">Towing</Text>
          <Text className="text-md text-white">We ensure your vehicle receives the best care</Text>
          <View className="my-2">
            <Text className="mt-2 text-xl font-bold text-white">Schedule this service</Text>
            <View className="flex-row  justify-between">
              <ServiceTypeSelector selected={serviceType} onSelect={handleServiceTypeChange} />

              {serviceType === 'Later' && (
                <View className="mx-4 flex w-2/3 flex-row justify-center gap-2">
                  <DatePicker
                    label=""
                    initialDate={scheduledDate}
                    mode="date"
                    onDateChange={handleDateChange}
                  />
                  <TimePicker
                    label=""
                    initialTime={scheduledTime}
                    onTimeChange={handleTimeChange} // Update to use the handler
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
}
