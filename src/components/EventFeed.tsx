import type { sessiondata } from "@prisma/client";
import { api } from "~/utils/api";
import { useState } from "react";
import { EventData } from "~/components/EventData";
import { EventFeedLoading } from "~/components/EventFeedLoading";

export const EventFeed: React.FC = () => {
  const sessiondata = api.sessiondata.getAll.useQuery().data;
  const [selectedSession, setSelectedSession] = useState<
    sessiondata | undefined
  >(undefined);

  return (
    <div className="flex h-full flex-row px-4">
      <div className="w-1/2">
        <div>
          {sessiondata ? (
            <table className="w-full text-center">
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Data Source</th>
                  <th>Commands</th>
                </tr>
              </thead>
              <tbody className="">
                {sessiondata.map((session: sessiondata) => {
                  return (
                    <tr
                      key={session.id}
                      className={
                        "cursor-pointer hover:bg-slate-200 hover:text-slate-800" +
                        (session.id === selectedSession?.id
                          ? "border-collapse border-r-2 border-slate-200 hover:text-slate-800"
                          : "border-collapse border-x-2 border-transparent hover:text-slate-800")
                      }
                      onClick={() => setSelectedSession(session)}
                    >
                      <td>{new Date(session.startTime).toUTCString()}</td>
                      <td>{session.sensor}</td>
                      <td>{session.commands.length}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <EventFeedLoading />
          )}
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
  );
};
