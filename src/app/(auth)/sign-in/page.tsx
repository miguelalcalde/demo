"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");

  return (
    <main className="bg-popover max-w-lg mx-auto my-4 rounded-lg p-10">
      <h1 className="text-2xl font-bold text-center">
        Sign in to your account
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitting");
        }}
      >
        <div className="mt-4 space-y-5">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              signIn("credentials", { email, callbackUrl: "/dashboard" });
            }}
            disabled={!email}
            className="w-full bg-primary text-primary-foreground text-center hover:opacity-90 font-medium px-4 py-2 rounded-lg block"
          >
            {/* <Loader2 className="mr-2 h-4 w-4 animate-spin"></Loader2> */}
            Sign In
          </Button>
        </div>
      </form>
    </main>
  );
};

export default Page;
