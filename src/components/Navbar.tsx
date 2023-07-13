import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import githubIcon from "../../public/github-logo.svg";

export const Navbar: React.FC = () => {
  const user = useUser();
  return (
    <>
      <nav className="relative flex w-full flex-wrap bg-gray-800 py-4">
        <div className="flex h-8 w-full justify-between px-8">
          <Link className="mx-4 text-xl text-white" href="/">
            Threatdash
          </Link>
          <div className="flex flex-row">
            <a
              href="https://github.com/jaalmaa/threatdash-frontend"
              target="_blank"
              rel="_ noreferrer"
              className="mx-4 rounded-2xl px-2 pt-1.5 hover:bg-slate-700"
            >
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                src={githubIcon}
                key="github-logo"
                alt="View project on GitHub"
                height="20"
                width="20"
              />
            </a>
            <Link
              className="mx-4 rounded-2xl px-4 pt-1 text-neutral-100 transition duration-150 hover:bg-slate-700 hover:text-white"
              href="/about"
            >
              About
            </Link>
            <a
              target="_blank"
              rel="_ noreferrer"
              className="mx-4 rounded-2xl px-4 pt-1 text-neutral-100 transition duration-150 hover:bg-slate-700 hover:text-white"
              href="https://blog.jaalma.io"
            >
              Blog
            </a>
            <Link
              className="mx-4 rounded-2xl px-4 pt-1 text-neutral-100 transition duration-150 hover:bg-slate-700 hover:text-white"
              href="/dashboard"
            >
              Dashboard
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
