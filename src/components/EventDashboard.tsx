import type { sessiondata } from "@prisma/client";
import { EventDashboardLoading } from "./EventDashboardLoading";

type EventDashboardProps = {
  sessiondata: sessiondata[] | undefined;
};

type EventDataMetrics = {
  TotalAttacks: number;
  UniqueSources: number;
  UniqueFiles?: number;
};

/* TODO refactor into separate module */
const GenerateEventDataMetrics = (
  EventData: sessiondata[]
): EventDataMetrics => {
  const UniqueSources: string[] = [
    ...new Set(EventData.map((session: sessiondata) => session.src_ip)),
  ];
  const UniqueFiles: string[] = [
    ...new Set(EventData.map((session: sessiondata) => session.shasum).flat()),
  ];
  return {
    TotalAttacks: EventData.length,
    UniqueSources: UniqueSources.length,
    UniqueFiles: UniqueFiles.length,
  };
};

export const EventDashboard: React.FC<EventDashboardProps> = (
  props: EventDashboardProps
) => {
  if (!props.sessiondata) {
    return <EventDashboardLoading />;
  }

  const EventDataMetrics: EventDataMetrics = GenerateEventDataMetrics(
    props.sessiondata
  );

  return (
    <div className="mx-16 h-full">
      <div className="mx-16 mb-8 flex h-full flex-col">
        <div className="flex h-2/5 w-full flex-row py-4">
          <div className="mr-4 flex h-full w-1/3 flex-col rounded-lg border-2 border-slate-200 p-6 text-center font-semibold shadow-lg">
            Total Attacks:{" "}
            <span className="m-auto text-6xl">
              {EventDataMetrics.TotalAttacks}
            </span>
          </div>
          <div className="mx-4 flex h-full w-1/3 flex-col rounded-lg border-2 border-slate-200 p-6 text-center font-semibold shadow-lg">
            Unique Attack Sources:{" "}
            <span className="m-auto text-6xl">
              {EventDataMetrics.UniqueSources}
            </span>
          </div>
          <div className="ml-4 flex h-full w-1/3 flex-col rounded-lg border-2 border-slate-200 p-6 text-center font-semibold shadow-lg">
            Unique Files Observed:{" "}
            <span className="m-auto text-6xl">
              {EventDataMetrics.UniqueFiles}
            </span>
          </div>
        </div>
        <div className="mb-8 h-3/5 py-4">
          <div className="h-full rounded-xl border-2 border-slate-200 shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};
