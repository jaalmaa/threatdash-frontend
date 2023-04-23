import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export const Navbar: React.FC = () => {
  const user = useUser();
  return (
    <>
      <nav className="relative flex w-full flex-wrap bg-cyan-950 py-4">
        <div className="flex w-full justify-between px-12">
          <a className="text-xl text-white" href="/">
            Threatdash
          </a>
          <div className="flex flex-row">
            <a className="mx-8 pt-1 text-neutral-100" href="/about">
              About
            </a>
            {user.isSignedIn ? (
              <div className="flex flex-row">
                <span className="mx-2 pt-1 text-neutral-100">
                  <p>{user.user.username}</p>
                </span>
                <UserButton />
              </div>
            ) : (
              <SignInButton>
                <span className="cursor-pointer pt-1 text-neutral-100">
                  Sign In
                </span>
              </SignInButton>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
