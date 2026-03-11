import { useTestProfile } from "@/hooks/queries/profileHooks";
import { Text, View } from "react-native";

export default function Index() {
  const { data: test, error, isLoading } = useTestProfile();
  return (
    <View className="bg-yellow-400 flex m-auto">
      {isLoading ? (
        <Text className="text-3xl">Loading...</Text>
      ) : error ? (
        <Text className="">Error: {error.message}</Text>
      ) : (
        <Text className="text-3xl">{JSON.stringify(test)}</Text>
      )}
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
