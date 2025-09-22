import AuthForm from "@/components/features/forms/auth/auth-form";
import { createClient } from "@/lib/supabase/server";

const LoginPage = async () => {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  return (
    <div>
      <main className="h-screen justify-center flex items-center ">
        <div className="flex flex-1 justify-center">
          <h1>{data.user?.email || "no user atm"}</h1>
          <AuthForm />
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default LoginPage;
