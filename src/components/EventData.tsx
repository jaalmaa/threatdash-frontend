import type { sessiondata } from "@prisma/client";
import { EventDataAccordion } from "./EventDataAccordion";

export type EventDataProps = {
  session: sessiondata;
};

export const EventData: React.FC<EventDataProps> = (props: EventDataProps) => {
  const showUrls: boolean = props.session.url.length !== 0;
  const showHashes: boolean = props.session.shasum.length !== 0;

  return (
    <div className="w-full overflow-auto break-words">
      <div className="text-sm">
        <p>Start time: {new Date(props.session.startTime).toUTCString()}</p>
        <p>
          {props.session.endTime
            ? `End time: ${new Date(props.session.endTime).toUTCString()}`
            : "Attack ongoing"}
        </p>
        <span className="my-1 flex flex-row text-sm">
          Source IP Address:
          <p className="ml-1 rounded-md border px-1 font-mono">
            {props.session.src_ip}
          </p>
        </span>
        <span className="my-1 flex flex-row text-sm">
          Credentials:
          <p className="ml-1 rounded-md border px-1 font-mono">
            {props.session.credentials.username}:
            {props.session.credentials.password}
          </p>
        </span>
        <EventDataAccordion displayName="Command History">
          <ul className="rounded-lg border px-2 py-1">
            {props.session.commands.map((command: string) => {
              return (
                <li className="font-mono text-sm" key={command}>
                  {command}
                </li>
              );
            })}
          </ul>
        </EventDataAccordion>
        {showUrls ? (
          <EventDataAccordion displayName="URLs">
            <ul className="rounded-lg border px-2 py-1">
              {props.session.url.map((url: string) => {
                return (
                  <li className="font-mono text-sm" key={url}>
                    {url}
                  </li>
                );
              })}
            </ul>
          </EventDataAccordion>
        ) : (
          ""
        )}
        {showHashes ? (
          <EventDataAccordion displayName="File Hashes">
            <ul className="rounded-lg border px-2 py-1">
              {props.session.shasum.map((shasum: string) => {
                return (
                  <li className="font-mono text-sm" key={shasum}>
                    {shasum}
                  </li>
                );
              })}
            </ul>
          </EventDataAccordion>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
