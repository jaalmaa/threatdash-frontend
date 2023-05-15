export const EventDashboardLoading: React.FC = () => {
  return (
    <div className="mx-16 mb-8 flex h-full flex-col">
      <div className="flex h-1/2 w-full flex-row py-4">
        <div className="mr-4 h-full w-1/3 animate-pulse rounded-lg bg-gray-500"></div>
        <div className="mx-4 h-full w-1/3 animate-pulse rounded-lg bg-gray-500"></div>
        <div className="ml-4 h-full w-1/3 animate-pulse rounded-lg bg-gray-500"></div>
      </div>
      <div className="mb-8 h-1/2 py-4">
        <div className="h-full animate-pulse rounded-lg bg-gray-500"></div>
      </div>
    </div>
  );
};
