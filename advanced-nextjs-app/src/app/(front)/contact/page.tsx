import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";

 

export default function ContactPage() {

  return (

    <div className="mx-auto max-w-2xl pt-16 pb-10">

      <h2 className="text-3xl text-blue-700">ติดต่อเรา</h2>
      <Separator className="my-4" />

      <div className="m-6 grid grid-cols-2 gap-4">
        <Button variant="secondary" asChild>
          <Link href="/about">Go to About Page</Link>
        </Button>
      </div>

    </div>

  );

}