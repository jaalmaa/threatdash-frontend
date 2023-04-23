import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/dist/api";

export const Navbar: React.FC = () => {
  const user = useUser();
  return (
    <>
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-neutral-50 py-4 text-neutral-500 shadow-lg focus:text-neutral-700 dark:bg-neutral-600">
        <div className="flex w-full flex-wrap items-center justify-between px-16">
          <a
            className="text-xl text-neutral-800 dark:text-neutral-200"
            href="/"
          >
            Threatdash
          </a>
          {user.isSignedIn ? (
            <div className="flex flex-row">
              <span className="mx-2 pt-1">
                <p>Hello, {user.user.username}!</p>
              </span>
              <UserButton />
            </div>
          ) : (
            <SignInButton>
              <span className="cursor-pointer">Sign In</span>
            </SignInButton>
          )}
        </div>
      </nav>
    </>
  );
};
