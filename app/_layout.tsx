import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../global.css';
import { useFonts } from 'expo-font';

import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

export default function Layout() {
  SplashScreen.preventAutoHideAsync();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsLarge: require('../assets/fonts/Poppins-SemiBold.ttf'),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }} />
    </GestureHandlerRootView>
  );
}
