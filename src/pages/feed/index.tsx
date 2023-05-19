import type { NextPage } from "next";
import { EventsDashboard } from "~/components/EventsDashboard";

const Dashboard: NextPage = () => {
  return (
    <div className="flex max-h-full w-full flex-col">
      <EventsDashboard />
    </div>
  );
};

export default Dashboard;
