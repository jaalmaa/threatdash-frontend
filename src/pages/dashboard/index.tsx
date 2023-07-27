import dynamic from "next/dynamic";
import { DashboardLoading } from "~/pages/dashboard/loading";
import { EventsLayout } from "~/pages/dashboard/layout";
import type { DashboardStatBoxProps } from "~/components/DashboardStats";
import type { NextPage } from "next";
import { api } from "~/utils/api";

const EventsHistogram = dynamic(() => import("~/components/EventsHistogram"));
const DashboardStats = dynamic(() => import("~/components/DashboardStats"));

export const Dashboard: NextPage = () => {
  const EventDataMetrics = api.sessiondata.getStatistics.useQuery().data;
  if (!EventDataMetrics) {
    return <DashboardLoading />;
  }

  const DashboardStatBoxes: DashboardStatBoxProps[] = [
    {
      displayName: "Total Attacks",
      displayValue: EventDataMetrics.TotalAttacks,
    },
    {
      displayName: "Unique Sources",
      displayValue: EventDataMetrics.TotalUniqueSources,
    },
    {
      displayName: "Unique Files",
      displayValue: EventDataMetrics.TotalUniqueHashes,
    },
    {
      displayName: "Unique URLs",
      displayValue: EventDataMetrics.TotalUniqueURLs,
    },
  ];

  return (
    <EventsLayout>
      <div className="flex h-full flex-col">
        <div className="flex h-2/5 w-full flex-row px-8 2xl:h-1/5">
          <DashboardStats data={DashboardStatBoxes} />
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
