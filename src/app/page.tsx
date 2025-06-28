import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";

export default async function Home() {
  // const users = await prisma.user.findMany();

  return (
    <div className="font-bold text-rose-500 text-2xl">
      Hello world!
      {/* {JSON.stringify(users)} */}

      <Button variant="default">
        Click me
      </Button>
    </div>
  );
}