import type { sessiondata } from "@prisma/client";

/* Extract to this component if event feed logic in dashboard page gets too complex */

type EventFeedProps = {
  sessiondata: sessiondata[] | undefined;
};

export const EventFeed: React.FC<EventFeedProps> = (props: EventFeedProps) => {
  return <div>loading...</div>;
};
