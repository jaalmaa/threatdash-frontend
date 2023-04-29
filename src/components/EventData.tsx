import type { sessiondata } from "@prisma/client";

type EventDataProps = {
  session: sessiondata;
};

export const EventData: React.FC<EventDataProps> = (props: EventDataProps) => {
  return (
    <div className="w-full overflow-auto break-words">
      <div>
        <p>Start time: {props.session.startTime}</p>
        <p>
          {props.session.endTime
            ? `End time: ${props.session.endTime}`
            : "Attack ongoing"}
        </p>
        <p>Source IP Address: {props.session.src_ip}</p>
        <h2 className="mt-2 font-semibold">Command History</h2>
        <ul>
          {props.session.commands.map((command: string) => {
            return <li key={command}>{command}</li>;
          })}
        </ul>
        <h2 className="mt-2 font-semibold">URLs</h2>
        <ul>
          {props.session.url.map((url: string) => {
            return <li key={url}>{url}</li>;
          })}
        </ul>
        <h2 className="mt-2 font-semibold">File Hashes</h2>
        <ul>
          {props.session.shasum.map((shasum: string) => {
            return <li key={shasum}>{shasum}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
