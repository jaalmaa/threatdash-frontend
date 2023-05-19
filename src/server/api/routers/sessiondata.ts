import { createTRPCRouter, loggedInProcedure } from "~/server/api/trpc";
import type { sessiondata } from "@prisma/client";

export type EventDataMetrics = {
  TotalAttacks: number;
  TotalUniqueHashes: number;
  TotalUniqueURLs: number;
  TotalUniqueSources: number;
  EventsByDay: SessionDay;
};

export type SessionDay = {
  [Day: string]: number;
};

const getEventsPerDay = (eventdata: sessiondata[]) => {
  const counts: SessionDay = {};
  eventdata.forEach((entry) => {
    const date = new Date(entry.startTime);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;

    if (counts.hasOwnProperty(formattedDate)) {
      counts[formattedDate]++;
    } else {
      counts[formattedDate] = 1;
    }
  });
  return counts;
};

export const sessiondataRouter = createTRPCRouter({
  getAll: loggedInProcedure.query(({ ctx }): Promise<sessiondata[]> => {
    return ctx.prisma.sessiondata.findMany();
  }),
  getStatistics: loggedInProcedure.query(({ ctx }) => {
    const EventDataMetrics = ctx.prisma.sessiondata
      .findMany()
      .then((data: sessiondata[]): EventDataMetrics => {
        const totalAttacks = data.length;
        const totalUniqueHashes = [
          ...new Set(data.map((session: sessiondata) => session.shasum).flat()),
        ].length;
        const totalUniqueURLs = [
          ...new Set(data.map((session: sessiondata) => session.url).flat()),
        ].length;
        const totalUniqueSources = [
          ...new Set(data.map((session: sessiondata) => session.src_ip)),
        ].length;
        const EventsByDay = getEventsPerDay(data);

        return {
          TotalAttacks: totalAttacks,
          TotalUniqueHashes: totalUniqueHashes,
          TotalUniqueURLs: totalUniqueURLs,
          TotalUniqueSources: totalUniqueSources,
          EventsByDay: EventsByDay,
        };
      });
    return EventDataMetrics;
  }),
});
