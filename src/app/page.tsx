import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <main className="h-screen justify-center flex items-center ">
        <div className="flex flex-1 justify-center bg-red-100">
          <Button>
            <Link href={"/login"}>Login</Link>
          </Button>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
