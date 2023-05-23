import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="m-auto flex h-full flex-row items-center justify-center">
      <div className="flex flex-col border-r-2 pr-16 text-center">
        <h1 className="p-4 text-6xl text-white">Welcome to Threatdash</h1>
        <h2 className="text-xl text-neutral-300">
          View real data collected from cyber attacks.
        </h2>
      </div>
      <Link
        href="/dashboard"
        className="mx-16 animate-pulse px-4 py-2 text-3xl text-neutral-300 hover:animate-none hover:text-neutral-100"
      >
        Get Started →
      </Link>
    </div>
  );
};

export default Home;
