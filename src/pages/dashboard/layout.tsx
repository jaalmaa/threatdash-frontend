import type { ReactNode } from "react";
import { useRouter } from "next/router";
import type { NextRouter } from "next/router";
import Link from "next/link";

export type EventsLayoutProps = {
  children: ReactNode;
};

export const EventsLayout: React.FC<EventsLayoutProps> = (
  props: EventsLayoutProps
) => {
  const router: NextRouter = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className="h-full max-h-full w-full max-w-full px-16 pb-8 pt-4">
      <div className="flex h-full w-full flex-col rounded-lg bg-slate-700 px-8 pb-8 shadow-lg">
        <div className="text-md text-center text-gray-200">
          <ul className="flex flex-row p-4">
            <Link
              href="/dashboard"
              className={
                `mx-2 inline-block cursor-pointer rounded-t-lg border-b-2 p-2 xl:text-xl ` +
                (currentRoute === "/dashboard"
                  ? "border-blue-300 text-blue-300"
                  : "border-transparent hover:border-gray-300 hover:text-gray-300")
              }
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/feed"
              className={
                `mx-2 inline-block cursor-pointer rounded-t-lg border-b-2 p-2 xl:text-xl ` +
                (currentRoute === "/dashboard/feed"
                  ? "border-blue-300 text-blue-300"
                  : "border-transparent hover:border-gray-300 hover:text-gray-300")
              }
            >
              Event Feed
            </Link>
          </ul>
        </div>
        <div className="h-full w-full">{props.children}</div>
      </div>
    </div>
  );
};
