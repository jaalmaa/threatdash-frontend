import type { ReactNode } from "react";

export type EventsLayoutProps = {
  children: ReactNode;
};

export const EventsLayout: React.FC<EventsLayoutProps> = (
  props: EventsLayoutProps
) => {
  return (
    <div className="flex max-h-full w-full flex-col">{props.children}</div>
  );
};
