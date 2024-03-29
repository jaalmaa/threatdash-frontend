import { EventsLayout } from "./layout";

export const DashboardLoading: React.FC = () => {
  return (
    <EventsLayout>
      <div className="mx-16 mb-8 flex h-full flex-col xl:h-1/2">
        <div className="flex h-2/5 w-full flex-row py-4">
          <div className="mr-4 h-full w-1/4 animate-pulse rounded-lg bg-gray-500"></div>
          <div className="mx-4 h-full w-1/4 animate-pulse rounded-lg bg-gray-500"></div>
          <div className="ml-4 h-full w-1/4 animate-pulse rounded-lg bg-gray-500"></div>
          <div className="ml-4 h-full w-1/4 animate-pulse rounded-lg bg-gray-500"></div>
        </div>
        <div className="mb-8 h-3/5 py-4">
          <div className="h-full animate-pulse rounded-lg bg-gray-500"></div>
        </div>
      </div>
    </EventsLayout>
  );
};
