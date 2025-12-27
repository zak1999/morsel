import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthContext } from '@/hooks/use-auth-context';
import SignOutButton from '@/components/logout';

export default function HomeScreen() {
  const { profile } = useAuthContext();

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text>Welcome!</Text>
        <View style={styles.stepContainer}>
          <Text>Username</Text>
          <Text>{profile?.username}</Text>
          <Text>Full name</Text>
          <Text>{profile?.full_name}</Text>
        </View>
      </View>
      <SignOutButton />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
