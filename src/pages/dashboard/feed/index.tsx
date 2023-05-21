import { EventsLayout } from "~/pages/dashboard/layout";
import type { NextPage } from "next";
import { EventFeed } from "~/components/EventFeed";

export const Feed: NextPage = () => {
  return (
    <EventsLayout>
      <EventFeed maximumDisplayedEvents={15} />
    </EventsLayout>
  );
};

export default Feed;
