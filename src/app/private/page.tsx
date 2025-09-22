import SignoutButton from "@/components/features/buttons/signout-btn";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <p>Hello {data.user.email}</p>
      <SignoutButton />
    </div>
  );
}
