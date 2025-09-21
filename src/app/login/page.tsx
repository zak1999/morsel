import AuthForm from "@/components/features/forms/auth/auth-form";

const LoginPage = () => {
  return (
    <div>
      <main className="h-screen justify-center flex items-center ">
        <div className="flex flex-1 justify-center">
          <AuthForm />
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default LoginPage;
