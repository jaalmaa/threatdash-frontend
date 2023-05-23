import type { NextPage } from "next";
import { SignIn } from "@clerk/nextjs";

const signInPage: NextPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <SignIn />
    </div>
  );
};

export default signInPage;
