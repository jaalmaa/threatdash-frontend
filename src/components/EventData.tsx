import type { sessiondata } from "@prisma/client";
import { Accordion } from "~/components/Accordion";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

export type EventDataProps = {
  session: sessiondata;
};

export const EventData: React.FC<EventDataProps> = (props: EventDataProps) => {
  const showUrls: boolean = props.session.url.length !== 0;
  const showHashes: boolean = props.session.shasum.length !== 0;

  return (
    <div className="w-full">
      <div className="cursor-default text-sm xl:text-lg">
        <p>Start time: {new Date(props.session.startTime).toUTCString()}</p>
        <p className={props.session.endTime ? "" : "font-bold"}>
          {props.session.endTime
            ? `End time: ${new Date(props.session.endTime).toUTCString()}`
            : "Interaction currently in progress..."}
        </p>
        <span className="my-1 flex flex-row text-sm xl:text-lg">
          Source IP Address:
          <p className="ml-1 rounded-md border px-1 font-mono">
            {props.session.src_ip}
          </p>
        </span>
        <span className="my-1 flex flex-row text-sm xl:text-lg">
          Credentials:
          <p className="ml-1 rounded-md border px-1 font-mono">
            {props.session.credentials.username}:
            {props.session.credentials.password}
          </p>
        </span>
        <Accordion displayName="Command History">
          <ul className="rounded-lg border px-2 py-1">
            {props.session.commands.map((command: string, id: number) => {
              return (
                <li className="font-mono text-sm xl:text-lg" key={id}>
                  <CopyToClipboardButton text={command} />
                </li>
              );
            })}
          </ul>
        </Accordion>
        {showUrls ? (
          <Accordion displayName="URLs">
            <ul className="rounded-lg border px-2 py-1">
              {props.session.url.map((url: string, id: number) => {
                return (
                  <li className="font-mono text-sm xl:text-lg" key={id}>
                    <CopyToClipboardButton text={url} />
                  </li>
                );
              })}
            </ul>
          </Accordion>
        ) : (
          ""
        )}
        {showHashes ? (
          <Accordion displayName="File Hashes">
            <ul className="rounded-lg border px-2 py-1">
              {props.session.shasum.map((shasum: string, id: number) => {
                return (
                  <li className="font-mono text-sm xl:text-lg" key={id}>
                    <CopyToClipboardButton text={shasum} />
                  </li>
                );
              })}
            </ul>
          </Accordion>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
