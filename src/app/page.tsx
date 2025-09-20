import LoginForm from "@/components/features/formianos/login-form";

export default function Home() {
  return (
    <div>
      <main className="h-screen justify-center flex items-center ">
        <div className="flex flex-1 justify-center">
          <LoginForm />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
