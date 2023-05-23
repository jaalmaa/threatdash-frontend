import dynamic from "next/dynamic";
import { EventsLayout } from "~/pages/dashboard/layout";
import type { NextPage } from "next";

const EventFeed = dynamic(() => import("~/components/EventFeed"));

export const Feed: NextPage = () => {
  return (
    <EventsLayout>
      <EventFeed maximumDisplayedEvents={15} />
    </EventsLayout>
  );
};

export default Feed;
