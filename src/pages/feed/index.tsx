import type { NextPage } from "next";
import { api } from "~/utils/api";
import { EventFeed } from "~/components/EventFeed";

const Dashboard: NextPage = () => {
  const sessiondata = api.sessiondata.getAll.useQuery();
  return (
    <div className="flex max-h-full w-full flex-col">
      <h1 className="mx-16 rounded-lg bg-slate-700 p-2 text-center text-3xl shadow-lg">
        Event Feed
      </h1>
      <EventFeed sessiondata={sessiondata.data} />
    </div>
  );
};

export default Dashboard;
