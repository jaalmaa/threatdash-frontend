import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
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
              className="mx-8 pt-1 text-neutral-100 hover:text-white"
              href="/about"
            >
              About
            </Link>
            <Link
              className="mx-8 pt-1 text-neutral-100 hover:text-white"
              href="/feed"
            >
              Feed
            </Link>
            {user.isSignedIn ? (
              <div className="flex flex-row">
                <span className="mx-2 flex flex-row text-neutral-100">
                  <p className="mx-2 pt-1">{user.user.username}</p>
                  <UserButton />
                </span>
              </div>
            ) : (
              <Link
                className="mx-8 pt-1 text-neutral-100 hover:text-white"
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
