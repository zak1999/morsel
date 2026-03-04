import { supabase } from "@/lib/supabase/supabase";

export const getTestProfile = async (id: string, no: number) => {
  return await supabase.from("profiles").select("*").eq("id", id);
};
