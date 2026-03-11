import { useTestProfile } from "@/hooks/queries/profileHooks";
import { Text, View } from "react-native";

export default function Index() {
  const { data: test, error, isLoading } = useTestProfile();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <Text>{JSON.stringify(test)}</Text>
      )}
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
