import type { sessiondata } from "@prisma/client";
import { EventFeed } from "./EventFeed";

type EventsDashboardProps = {
  sessiondata: sessiondata[] | undefined;
};

const GenerateEventDataMetrics = (EventData: sessiondata[]) => {
  /* TODO: Do some math to generate overall statistics about the event data */
  return undefined;
};

/* Responsible for rendering contained underneath page header, containing 2 tabs:
 * Switching between the two renders one of two components:
 * 1. Event feed
 * 2. High level dashboard containing overview of data, graphs etc. */

export const EventsDashboard: React.FC<EventsDashboardProps> = (
  props: EventsDashboardProps
) => {
  return (
    <div className="mx-16 my-4 flex flex-1 flex-row rounded-lg bg-slate-700 shadow-lg">
      <EventFeed sessiondata={props.sessiondata} />
    </div>
  );
};
