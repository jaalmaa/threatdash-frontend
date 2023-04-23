import type { NextPage } from "next";
import { SignIn } from "@clerk/nextjs";

const signInPage: NextPage = () => {
  return <SignIn />;
};

export default signInPage;
