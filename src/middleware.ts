import { withClerkMiddleware, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicPaths = ["/", "/about*", "/sign-in*", "sign-up*"];

const isPublic = (path: string) => {
  return publicPaths.find((x) =>
    path.match(new RegExp(`^${x}$`.replace("*$", "($|/)")))
  );
};

export default withClerkMiddleware((request: NextRequest) => {
  // if (isPublic(request.nextUrl.pathname)) return NextResponse.next();

  // const { userId } = getAuth(request);
  // if (!userId) {
  //   const signInUrl = new URL("/sign-in", request.url);
  //   signInUrl.searchParams.set("callbackUrl", request.url);
  //   return NextResponse.redirect(signInUrl);
  // }
  return NextResponse.next();
});

// Stop Middleware running on static files
export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
