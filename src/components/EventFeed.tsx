import type { sessiondata } from "@prisma/client";
import { api } from "~/utils/api";
import { useState } from "react";
import { EventData } from "~/components/EventData";
import { FeedLoading } from "~/pages/dashboard/feed/loading";

type EventFeedProps = {
  maximumDisplayedEvents: number;
};

export const EventFeed: React.FC<EventFeedProps> = (props: EventFeedProps) => {
  const sessiondata = api.sessiondata.getAll.useQuery().data;
  const sortedSessionData = sessiondata?.sort((x, y) => {
    const xTimestamp = new Date(x.startTime).getTime();
    const yTimestamp = new Date(y.startTime).getTime();
    return yTimestamp - xTimestamp;
  });
  const [selectedSession, setSelectedSession] = useState<
    sessiondata | undefined
  >(undefined);

  return (
    <div className="flex flex-row px-4">
      <div className="w-1/2">
        <div>
          {sortedSessionData ? (
            <table className="w-full text-center">
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Data Source</th>
                  <th>Commands</th>
                </tr>
              </thead>
              <tbody className="">
                {sortedSessionData
                  .slice(-props.maximumDisplayedEvents)
                  .map((session: sessiondata) => {
                    return (
                      <tr
                        key={session.id}
                        className={
                          "cursor-pointer hover:bg-slate-200 hover:text-slate-800" +
                          (session.id === selectedSession?.id
                            ? "border-collapse border-r-2 border-slate-200 hover:text-slate-800"
                            : "border-collapse border-r-2 border-transparent hover:text-slate-800")
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
            <FeedLoading />
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
