import type { sessiondata } from "@prisma/client";
import { EventFeed } from "./EventFeed";
import { EventDashboard } from "./EventDashboard";
import { useState } from "react";

type EventsDashboardProps = {
  sessiondata: sessiondata[] | undefined;
};
type SelectedPage = "dashboard" | "feed";

export const EventsDashboard: React.FC<EventsDashboardProps> = (
  props: EventsDashboardProps
) => {
  const [SelectedPage, setSelectedPage] = useState<SelectedPage>("dashboard");
  return (
    <div className="mx-16 my-4 flex flex-1 flex-col rounded-lg bg-slate-700 shadow-lg">
      <div className="text-md px-10 text-center text-gray-200">
        <ul className="flex flex-row p-4">
          <li
            className={
              `mx-2 inline-block cursor-pointer rounded-t-lg border-b-2 p-2 ` +
              (SelectedPage === "dashboard"
                ? "border-blue-300 text-blue-300"
                : "border-transparent hover:border-gray-300 hover:text-gray-300")
            }
            onClick={() => setSelectedPage("dashboard")}
          >
            Dashboard
          </li>
          <li
            className={
              `mx-2 inline-block cursor-pointer rounded-t-lg border-b-2 p-2 ` +
              (SelectedPage === "feed"
                ? "border-blue-300 text-blue-300"
                : "border-transparent hover:border-gray-300 hover:text-gray-300")
            }
            onClick={() => setSelectedPage("feed")}
          >
            Event Feed
          </li>
        </ul>
      </div>
      <div className="p-2"></div>
      {SelectedPage === "dashboard" ? (
        <EventDashboard sessiondata={props.sessiondata} />
      ) : (
        <EventFeed sessiondata={props.sessiondata} />
      )}
    </div>
  );
};
