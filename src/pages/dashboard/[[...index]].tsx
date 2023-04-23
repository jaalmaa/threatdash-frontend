import type { NextPage } from "next";
import { api } from "~/utils/api";

const Dashboard: NextPage = () => {
  const sessiondata = api.sessiondata.getAll.useQuery();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{JSON.stringify(sessiondata.data)}</p>
    </div>
  );
};

export default Dashboard;
