import { DashboardLoading } from "~/pages/dashboard/loading";
import { EventsHistogram } from "~/components/EventsHistogram";
import { EventsLayout } from "~/pages/dashboard/layout";
import type { NextPage } from "next";
import { api } from "~/utils/api";

export const Dashboard: NextPage = () => {
  const EventDataMetrics = api.sessiondata.getStatistics.useQuery().data;
  if (!EventDataMetrics) {
    return <DashboardLoading />;
  }

  return (
    <EventsLayout>
      <div className="flex h-full flex-col">
        <div className="my-4 flex h-2/5 w-full flex-row px-8">
          <div className="mr-8 flex h-full w-1/3 flex-col rounded-lg border-2 border-slate-200 p-6 text-center font-semibold shadow-lg">
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
          <div className="ml-8 flex h-full w-1/3 flex-col rounded-lg border-2 border-slate-200 p-6 text-center font-semibold shadow-lg">
            Unique Files Observed:{" "}
            <span className="m-auto text-6xl">
              {EventDataMetrics.TotalUniqueHashes}
            </span>
          </div>
        </div>
        <div className="my-4 h-3/5">
          <div className="h-full">
            <EventsHistogram
              MaximumDisplayedDays={20}
              EventsByDay={EventDataMetrics.EventsByDay}
            />
          </div>
        </div>
      </div>
    </EventsLayout>
  );
};

export default Dashboard;
