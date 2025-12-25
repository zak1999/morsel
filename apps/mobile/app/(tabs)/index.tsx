import { Link } from 'expo-router';
import { Button } from 'heroui-native';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View className="flex flex-1 bg-slate-700 items-center justify-center">
      <Text className="text-white">Edit app/index.tsx to edit this screen.</Text>

      <Button variant="primary">
        <Link href={'/about'}>take me to the about page</Link>
      </Button>
    </View>
  );
}
