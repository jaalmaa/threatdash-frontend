import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Threatdash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl text-neutral-800">Welcome to Threatdash</h1>
      <a
        href={"/dashboard"}
        className="text-2xl text-neutral-600 hover:text-neutral-800"
      >
        Get Started
      </a>
    </>
  );
};

export default Home;
