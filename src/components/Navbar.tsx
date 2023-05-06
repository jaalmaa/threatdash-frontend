import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const user = useUser();
  return (
    <>
      <nav className="relative flex w-full flex-wrap bg-gray-800 py-4">
        <div className="flex w-full justify-between px-12">
          <Link className="text-xl text-white" href="/">
            Threatdash
          </Link>
          <div className="flex flex-row">
            <Link
              className="mx-4 rounded-2xl px-4 pt-1 text-neutral-100 transition duration-150 hover:bg-slate-700 hover:text-white"
              href="/about"
            >
              About
            </Link>
            <a
              target="_blank"
              className="mx-4 rounded-2xl px-4 pt-1 text-neutral-100 transition duration-150 hover:bg-slate-700 hover:text-white"
              href="https://blog.jaalma.io"
            >
              Blog
            </a>
            <Link
              className="mx-4 rounded-2xl px-4 pt-1 text-neutral-100 transition duration-150 hover:bg-slate-700 hover:text-white"
              href="/feed"
            >
              Feed
            </Link>
            {user.isSignedIn ? (
              <div className="flex flex-row">
                <span className="mx-2 flex flex-row text-neutral-100">
                  <UserButton />
                </span>
              </div>
            ) : (
              <Link
                className="mx-4 rounded-2xl px-4 pt-1 text-neutral-100 transition duration-150 hover:bg-slate-700 hover:text-white"
                href="/sign-in"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
