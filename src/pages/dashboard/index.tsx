import dynamic from "next/dynamic";
import { DashboardLoading } from "~/pages/dashboard/loading";
import { DashboardStatBox } from "~/components/DashboardStatBox";
import { EventsLayout } from "~/pages/dashboard/layout";
import type { NextPage } from "next";
import { api } from "~/utils/api";

const EventsHistogram = dynamic(() => import("~/components/EventsHistogram"));

export const Dashboard: NextPage = () => {
  const EventDataMetrics = api.sessiondata.getStatistics.useQuery().data;
  if (!EventDataMetrics) {
    return <DashboardLoading />;
  }

  return (
    <EventsLayout>
      <div className="flex h-full flex-col">
        <div className="my-4 flex h-2/5 w-full flex-row px-8">
          <DashboardStatBox
            displayName="Total Attacks"
            displayValue={EventDataMetrics.TotalAttacks}
          />
          <DashboardStatBox
            displayName="Unique Attack Sources"
            displayValue={EventDataMetrics.TotalUniqueSources}
          />
          <DashboardStatBox
            displayName="Unique Files Observed"
            displayValue={EventDataMetrics.TotalUniqueHashes}
          />
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
