import type { NextPage } from "next";
import { useState } from "react";
import type { sessiondata } from "@prisma/client";
import { api } from "~/utils/api";
import { EventData } from "~/components/EventData";

const Dashboard: NextPage = () => {
  const sessiondata = api.sessiondata.getAll.useQuery();
  const [selectedSession, setSelectedSession] = useState<
    sessiondata | undefined
  >(undefined);

  return (
    <section className="flex max-h-full w-full flex-col">
      <h1 className="text-center text-2xl font-semibold">Dashboard</h1>
      <div className="mx-16 my-4 flex flex-1 flex-row rounded-lg bg-slate-700 shadow-lg">
        <div className="w-1/2 p-4">
          <div>
            <table className="w-full text-center">
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Source</th>
                  <th>Commands</th>
                </tr>
              </thead>
              <tbody className="">
                {sessiondata.data?.map((session: sessiondata) => {
                  return (
                    <tr
                      key={session.id}
                      className={
                        "cursor-pointer hover:bg-slate-200 hover:text-slate-800" +
                        (session.id === selectedSession?.id
                          ? "border-collapse border-r-2 border-slate-200 hover:text-slate-800"
                          : "")
                      }
                      onClick={() => setSelectedSession(session)}
                    >
                      <td>{session.startTime}</td>
                      <td>{session.sensor}</td>
                      <td>{session.commands.length}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex h-full w-1/2 p-4">
          {selectedSession ? (
            <EventData session={selectedSession} />
          ) : (
            <p className="m-auto">
              Select an item from the feed to view its details
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
