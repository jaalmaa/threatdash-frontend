import type { sessiondata } from "@prisma/client";

type EventFeedProps = {
  sessiondata: sessiondata[] | undefined;
};

export const EventFeed: React.FC<EventFeedProps> = (props: EventFeedProps) => {
  return <div>loading...</div>;
};
