import { Link, Tabs } from 'expo-router';

import { HeaderButton } from '../../components/HeaderButton';
import { TabBarIcon } from '../../components/TabBarIcon';
import { View } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#0D1328',
          borderTopColor: 'white',
        },
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let IconComponent = Feather;

          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'activity') {
            iconName = 'activity';
          } else if (route.name === 'settings') {
            IconComponent = FontAwesome5;
            iconName = 'cog';
          }

          return (
            <View className="h-11 items-center  ">
              {focused && <View className=" h-0.5 w-36 bg-white" />}
              <IconComponent
                name={iconName as keyof typeof Feather.glyphMap}
                size={24}
                color={color}
                className="py-2"
              />
            </View>
          );
        },
      })}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: 'Activity',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
        }}
      />
    </Tabs>
  );
}
