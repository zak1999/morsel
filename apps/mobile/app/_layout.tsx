import { Stack } from 'expo-router';
import '../global.css';
import { HeroUINativeProvider } from 'heroui-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAuthContext } from '@/hooks/use-auth-context';
import { SplashScreenController } from '@/components/splash-screen-controller';
import AuthProvider from '@/providers/auth-provider';

// Separate RootNavigator so we can access the AuthContext
function RootNavigator() {
  const { isLoggedIn } = useAuthContext();
  console.log('isLoggedIn _layout RootNavigator: ', isLoggedIn);

  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeroUINativeProvider
      //  TODO: at some point have a look at this:
      // https://v3.heroui.com/docs/native/getting-started/provider
      >
        <AuthProvider>
          <SplashScreenController />
          <RootNavigator />
        </AuthProvider>
      </HeroUINativeProvider>
    </GestureHandlerRootView>
  );
}
