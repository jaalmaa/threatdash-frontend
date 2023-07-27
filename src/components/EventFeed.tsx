import type { sessiondata } from "@prisma/client";
import { api } from "~/utils/api";
import { useState } from "react";
import { EventData } from "~/components/EventData";
import { FeedLoading } from "~/pages/dashboard/feed/loading";

type EventFeedProps = {
  maximumDisplayedEvents: number;
};

const EventFeed: React.FC<EventFeedProps> = (props: EventFeedProps) => {
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
    <div className="grid h-full w-full grid-cols-2 flex-row px-4 2xl:h-1/2">
      <div className="mx-4 grid h-full">
        {sortedSessionData ? (
          <div>
            <div className="mb-2 grid w-full grid-cols-4 text-center 2xl:text-lg">
              <div className="col-span-2 font-semibold">Timestamp</div>
              <div className="font-semibold">Data Source</div>
              <div className="font-semibold">Commands</div>
            </div>
            <div>
              {sortedSessionData
                .slice(-props.maximumDisplayedEvents)
                .map((session: sessiondata, id: number) => {
                  return (
                    <div
                      key={id}
                      className={
                        "grid cursor-pointer grid-cols-4 rounded-xl py-1 text-center " +
                        (session.id === selectedSession?.id
                          ? " bg-slate-800"
                          : " hover:bg-slate-800")
                      }
                      onClick={() => setSelectedSession(session)}
                    >
                      <div className="col-span-2 2xl:text-lg">
                        {new Date(session.startTime).toUTCString()}
                      </div>
                      <div className="2xl:text-lg">{session.sensor}</div>
                      <div className="2xl:text-lg">
                        {session.commands.length}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          <FeedLoading />
        )}
      </div>
      <div className="mx-4 grid">
        {selectedSession ? (
          <EventData session={selectedSession} />
        ) : (
          <p className="m-auto flex flex-grow justify-center 2xl:text-xl">
            Select an item from the feed to view its details
          </p>
        )}
      </div>
    </div>
  );
};

export default EventFeed;
