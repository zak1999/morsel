import { getTestProfile } from "@/services/profiles";
import { buildSupabaseQuery } from "@/utils/server/buildSupabaseQuery";
import { useQuery } from "@tanstack/react-query";

export const useTestProfile = () => {
  return useQuery({
    queryKey: ["test-profileeeess"],
    queryFn: buildSupabaseQuery(getTestProfile, "80c4704a-a519-4514-b1df-bbf8e90b09f1", 1),
  });
};
