import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Threatdash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-auto flex max-h-screen min-h-full min-w-full flex-col items-center justify-center">
        <h1 className="text-3xl text-white">Welcome to Threatdash</h1>
        <a
          href={"/dashboard"}
          className="text-2xl text-neutral-300 hover:text-neutral-100 motion-safe:animate-pulse"
        >
          Get Started →
        </a>
      </div>
    </>
  );
};

export default Home;
