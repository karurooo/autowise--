import { forwardRef } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

interface ServicesProps {
  title: string;
  image: any;
  onPress: () => void;
}

const Services = forwardRef<TouchableOpacity, ServicesProps>(
  ({ title, image, onPress, ...ServiceProps }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        onPress={onPress}
        {...ServiceProps}
        className="flex flex-row items-center justify-start gap-2 p-4">
        <Image source={image} className="h-16 w-16 rounded-full" />
        <Text className="text-lg font-semibold text-white">{title}</Text>
      </TouchableOpacity>
    );
  }
);

export default Services;
