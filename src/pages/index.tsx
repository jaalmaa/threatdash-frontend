import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="m-auto flex h-full flex-col items-center justify-center">
      <h1 className="text-3xl text-white">Welcome to Threatdash</h1>
      <Link
        href="/dashboard"
        className="m-4 text-2xl text-neutral-300 hover:animate-none hover:text-neutral-100 motion-safe:animate-pulse"
      >
        Get Started →
      </Link>
    </div>
  );
};

export default Home;
