import { ClerkProvider } from "@clerk/nextjs";
import type { AppType } from "next/app";
import Head from "next/head";
import { api } from "~/utils/api";
import { Navbar } from "~/components/Navbar";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Threatdash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClerkProvider {...pageProps}>
        <div className="max-w-screen min-w-screen flex max-h-screen min-h-screen flex-col">
          <Navbar />
          <main className="flex flex-grow bg-gray-800 py-4 text-neutral-100">
            <Component {...pageProps} />
          </main>
        </div>
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
