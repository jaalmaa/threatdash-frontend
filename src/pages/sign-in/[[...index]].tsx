import type { NextPage } from "next";
import { SignIn } from "@clerk/nextjs";

const signInPage: NextPage = () => {
  return (
    <div className="m-auto">
      <SignIn />
    </div>
  );
};

export default signInPage;
