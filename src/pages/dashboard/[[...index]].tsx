import type { NextPage } from "next";
import { api } from "~/utils/api";
import { EventFeed } from "~/components/EventFeed";
import type { sessiondata } from "@prisma/client";

const Dashboard: NextPage<sessiondata[]> = () => {
  const sessiondata = api.sessiondata.getAll.useQuery();
  return (
    <div className="flex max-h-full w-full flex-col">
      <h1 className="text-center text-2xl font-semibold">Dashboard</h1>
      <EventFeed sessiondata={sessiondata.data} />
    </div>
  );
};

export default Dashboard;
