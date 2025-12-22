import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated';

import { HeroUINativeProvider } from 'heroui-native';
import { AppThemeProvider } from '../contexts/app-theme-context';
import { useColorScheme } from '@/hooks/use-color-scheme';
import '@/global.css';

export const unstable_settings = {
  anchor: '(tabs)',
};

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const contentWrapper = useCallback(
    (children: React.ReactNode) => (
      <KeyboardAvoidingView
        pointerEvents="box-none"
        behavior="padding"
        keyboardVerticalOffset={12}
        className="flex-1"
      >
        {children}
      </KeyboardAvoidingView>
    ),
    [],
  );

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppThemeProvider>
          <HeroUINativeProvider
            config={{
              toast: { contentWrapper },
            }}
          >
            <Stack>
              {/* tabs live under this route group. The tab bar stays visible
                  as long as we navigate to routes that are still inside (tabs). */}
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

              {/* Modals and other “outside tabs” screens go here */}
              <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
            </Stack>
            <StatusBar style="auto" />
          </HeroUINativeProvider>
        </AppThemeProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
