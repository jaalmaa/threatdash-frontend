import { ClerkProvider } from "@clerk/nextjs";
import type { AppType } from "next/app";
import { api } from "~/utils/api";
import { Navbar } from "~/components/Navbar";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <div className="max-w-screen flex h-screen max-h-screen flex-col">
        <Navbar />
        <main className="flex flex-grow flex-col items-center justify-center bg-purple-50">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
            <Component {...pageProps} />
          </div>
        </main>
      </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
