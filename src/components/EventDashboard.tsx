import type { sessiondata } from "@prisma/client";
import { EventDashboardLoading } from "./EventDashboardLoading";

type EventDashboardProps = {
  sessiondata: sessiondata[] | undefined;
};

/* TODO refactor into separate module */
const GenerateEventDataMetrics = (EventData: sessiondata[]) => {
  return EventData.length;
};

export const EventDashboard: React.FC<EventDashboardProps> = (
  props: EventDashboardProps
) => {
  return (
    <div className="mx-16 h-full">
      {props.sessiondata ? (
        <p>Total attacks: {GenerateEventDataMetrics(props.sessiondata)}</p>
      ) : (
        <EventDashboardLoading />
      )}
    </div>
  );
};
