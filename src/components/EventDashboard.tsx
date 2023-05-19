import { api } from "~/utils/api";
import { EventDashboardLoading } from "./EventDashboardLoading";
import { EventsHistogram } from "./EventsHistogram";

export const EventDashboard: React.FC = () => {
  const EventDataMetrics = api.sessiondata.getStatistics.useQuery().data;
  if (!EventDataMetrics) {
    return <EventDashboardLoading />;
  }

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
              {EventDataMetrics.TotalUniqueSources}
            </span>
          </div>
          <div className="ml-4 flex h-full w-1/3 flex-col rounded-lg border-2 border-slate-200 p-6 text-center font-semibold shadow-lg">
            Unique Files Observed:{" "}
            <span className="m-auto text-6xl">
              {EventDataMetrics.TotalUniqueHashes}
            </span>
          </div>
        </div>
        <div className="mb-8 h-3/5 py-4">
          <div className="h-full max-h-full rounded-xl border-2 border-slate-200 p-2 shadow-lg">
            <EventsHistogram
              MaximumDisplayedDays={20}
              EventsByDay={EventDataMetrics.EventsByDay}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
