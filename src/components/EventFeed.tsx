import type { sessiondata } from "@prisma/client";
import { useState } from "react";
import { EventData } from "~/components/EventData";
import { EventFeedLoading } from "~/components/EventFeedLoading";

/* Extract to this component if event feed logic in dashboard page gets too complex */

type EventFeedProps = {
  sessiondata: sessiondata[] | undefined;
};

export const EventFeed: React.FC<EventFeedProps> = (props: EventFeedProps) => {
  const [selectedSession, setSelectedSession] = useState<
    sessiondata | undefined
  >(undefined);

  return (
    <div className="flex h-full flex-row px-4">
      <div className="w-1/2">
        <div>
          {props.sessiondata ? (
            <table className="w-full text-center">
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Source</th>
                  <th>Commands</th>
                </tr>
              </thead>
              <tbody className="">
                {props.sessiondata.map((session: sessiondata) => {
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
                      <td>{session.startTime}</td>
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
