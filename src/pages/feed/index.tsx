import type { NextPage } from "next";
import { api } from "~/utils/api";
import { EventsDashboard } from "~/components/EventsDashboard";

const Dashboard: NextPage = () => {
  const sessiondata = api.sessiondata.getAll.useQuery();
  return (
    <div className="flex max-h-full w-full flex-col">
      <EventsDashboard sessiondata={sessiondata.data} />
    </div>
  );
};

export default Dashboard;
