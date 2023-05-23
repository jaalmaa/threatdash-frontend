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
      <div className="flex h-full max-h-full w-full max-w-full flex-col">
        <ClerkProvider {...pageProps}>
          <Navbar />
          <main className="flex-grow bg-gray-800 text-neutral-100">
            <Component {...pageProps} />
          </main>
        </ClerkProvider>
      </div>
    </>
  );
};

export default api.withTRPC(MyApp);
