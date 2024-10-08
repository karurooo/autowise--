import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ title, onPress, ...touchableProps }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        onPress={onPress}
        {...touchableProps}
        className={`${styles.button} ${touchableProps.className}`}>
        <Text className={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = {
  button: 'items-center bg-[#CBB26A] rounded-xl shadow-md p-2 my-2',
  buttonText: 'text-white text-xl font-semibold text-center',
};
