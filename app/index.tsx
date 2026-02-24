import { supabase } from "@/lib/supabase/supabase";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const handleClick = async () => {
    let { data: test, error } = await supabase.from("profiles").select("*").limit(1).single();
    console.log(test, error);
    setData(test?.full_name ?? "no data");
  };
  const [data, setData] = useState<string | null>(null);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{data}.</Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="click" onPress={handleClick} />
    </View>
  );
}
