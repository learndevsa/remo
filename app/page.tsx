import { Button } from "@/components/ui/button";
import { SignIn, SignUp } from "@clerk/nextjs";
import { ButtonIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Dashboard from "./page";
import Page from "./(auth)/sign-up/[[...sign-up]]/page";
import { ArrowLeft, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function Home() {
  <SignIn/>;
  <SignUp/>;
  return (
  <div className="justify-center"> 
    <Link className="justify-center" href={"/dashboard"}>
    <Button>
        Enter
    </Button>
      </Link>
 
  <div className="text-bold justify-center text-3xl">
    <h2 className="text-black justify-center">Welcome to SPECANCIENS projects</h2> 
   </div>
   </div> 
  
  );
}
