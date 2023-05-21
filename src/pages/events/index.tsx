import type { NextPage } from "next";
import { EventsDashboard } from "~/components/EventsDashboard";
import { EventsLayout } from "./layout";

const Events: NextPage = () => {
  return (
    <EventsLayout>
      <EventsDashboard />
    </EventsLayout>
  );
};

export default Events;
