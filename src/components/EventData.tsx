import type { sessiondata } from "@prisma/client";

export type EventDataProps = {
  session: sessiondata;
};

export const EventData: React.FC<EventDataProps> = (props: EventDataProps) => {
  const showUrls: boolean = props.session.url.length !== 0;
  const showHashes: boolean = props.session.shasum.length !== 0;

  return (
    <div className="w-full overflow-auto break-words">
      <div className="text-sm">
        <p>Start time: {props.session.startTime}</p>
        <p>
          {props.session.endTime
            ? `End time: ${props.session.endTime}`
            : "Attack ongoing"}
        </p>
        <span className="my-1 flex flex-row text-sm">
          Source IP Address:
          <p className="ml-1 rounded-md border px-1 font-mono text-neutral-100">
            {props.session.src_ip}
          </p>
        </span>
        <span className="my-1 flex flex-row text-sm">
          Credentials:
          <p className="ml-1 rounded-md border px-1 font-mono text-neutral-100">
            {props.session.credentials.username}:
            {props.session.credentials.password}
          </p>
        </span>
        <h2 className="mt-2 font-semibold">Command History</h2>
        <ul className="rounded-lg border px-2 py-1">
          {props.session.commands.map((command: string) => {
            return (
              <li className="font-mono text-sm" key={command}>
                {command}
              </li>
            );
          })}
        </ul>
        {showUrls ? (
          <>
            <h2 className="mt-2 font-semibold">URLs</h2>
            <ul className="rounded-lg border px-2 py-1">
              {props.session.url.map((url: string) => {
                return (
                  <li className="font-mono text-sm" key={url}>
                    {url}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          ""
        )}
        {showHashes ? (
          <>
            <h2 className="mt-2 font-semibold">File Hashes</h2>
            <ul className="rounded-lg border px-2 py-1">
              {props.session.shasum.map((shasum: string) => {
                return (
                  <li className="font-mono text-sm" key={shasum}>
                    {shasum}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
