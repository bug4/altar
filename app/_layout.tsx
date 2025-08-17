import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import '../src/i18n';
import { getStoredLanguage } from '../src/i18n';
import { useTranslation } from 'react-i18next';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { i18n } = useTranslation();
  const [fontsLoaded, fontError] = useFonts({
    // You can add custom fonts here if needed
  });

  useEffect(() => {
    const initLanguage = async () => {
      const storedLanguage = await getStoredLanguage();
      await i18n.changeLanguage(storedLanguage);
    };

    initLanguage();
  }, [i18n]);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide splash screen once fonts are loaded or if there's an error
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Prevent rendering until the font has loaded or we have an error
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}