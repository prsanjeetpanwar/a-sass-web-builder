import { Button } from "@/components/ui/button";

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