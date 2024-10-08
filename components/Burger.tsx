import React, { useState } from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import supabase from '~/utils/supabase';
import { useUserStore } from '../store/users';

const Drawer: React.FC = () => {
  const router = useRouter();

  interface menuItems {
    title: string;
    icon: any;
    onPress: () => void;
  }

  const { width, height } = useWindowDimensions();
  const drawerWidth = width * 0.8;
  const translateX = useSharedValue(-drawerWidth);
  const [isOpen, setIsOpen] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const openDrawer = () => {
    setIsOpen(!isOpen);
    translateX.value = withSpring(isOpen ? -drawerWidth : 0);
  };

  const handleGesture = (event: PanGestureHandlerGestureEvent) => {
    if (event.nativeEvent.translationX > 50) {
      openDrawer();
    } else if (event.nativeEvent.translationX < -50) {
      openDrawer();
    }
  };

  const toHome = () => {
    router.push('/onboarding');
  };

  const toActivity = () => {
    router.push('/activity');
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log('Error logging out:', error.message);
    } else {
      console.log('Logged out successfully');

      router.replace('/signin');
    }
  };

  const menuItems: menuItems[] = [
    {
      title: 'Home',
      icon: <Feather name="home" size={24} color="#C0C0C0" />,
      onPress: () => toHome(),
    },
    {
      title: 'Activity',
      icon: <Feather name="activity" size={24} color="#C0C0C0" />,
      onPress: () => toActivity(),
    },
    {
      title: 'Vehicles',
      icon: <FontAwesome5 name="car" size={24} color="#C0C0C0" />,
      onPress: () => console.log('Settings'),
    },
    {
      title: 'Notification',
      icon: <FontAwesome5 name="bell" size={24} color="#C0C0C0" />,
      onPress: () => console.log('Settings'),
    },
    {
      title: 'Settings',
      icon: <Feather name="settings" size={24} color="#C0C0C0" />,
      onPress: () => console.log('Settings'),
    },
    {
      title: 'Logout',
      icon: <MaterialIcons name="logout" size={24} color="#C0C0C0" />,
      onPress: () => logout(),
    },
  ];

  return (
    <View className="absolute bottom-0 left-0 right-0 top-0 flex-1">
      <PanGestureHandler onGestureEvent={handleGesture}>
        <Animated.View
          className="absolute bottom-0 left-0 right-0 top-0 z-10 w-4/5  border-r-2 border-[#3E3E3E] bg-[#0D1328] px-10 py-20"
          style={[animatedStyle, { height }]}>
          <View>
            <Text className="text-2xl font-bold text-white">
              {' '}
              Auto<Text className="fold-bold text-2xl text-[#CBB26A]">Wise</Text>
            </Text>
            <View className="mt-10 flex flex-col">
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={item.onPress}
                  className="flex flex-row items-center gap-5 py-5">
                  {item.icon}
                  <Text className="text-lg text-[#C0C0C0]">{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
      <TouchableOpacity onPress={openDrawer} className="absolute left-5 top-8 z-0">
        <FontAwesome5 name="bars" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Drawer;
