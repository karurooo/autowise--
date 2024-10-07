import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

interface SuccessAlertProps {
  successTitle: string;
  successMessage: string;
  successVisible: boolean;
  onClose: () => void;
}

export const SuccessAlert = ({
  successTitle,
  successMessage,
  successVisible,
  onClose,
}: SuccessAlertProps) => {
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(successVisible ? 1 : 0, { duration: 500 }),
    };
  });
  return (
    <Modal visible={successVisible} transparent>
      <View className="flex-1 items-center justify-center text-white ">
        <Animated.View className="w-4/5 rounded-lg bg-[#3E3E3E]" style={animatedStyle}>
          <Text className="my-4 text-center text-2xl font-bold text-white ">{successTitle}</Text>
          <Text className="mb-2 text-center text-lg text-white">{successMessage}</Text>
          <TouchableOpacity onPress={onClose} className="w-full border-t-2 border-[#7E7E7E]">
            <Text className="py-3 text-center text-lg font-bold text-white">Close</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};
