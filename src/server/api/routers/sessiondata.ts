import { createTRPCRouter, loggedInProcedure } from "~/server/api/trpc";

export const sessiondataRouter = createTRPCRouter({
  getAll: loggedInProcedure.query(({ ctx }) => {
    return ctx.prisma.sessiondata.findMany();
  }),
});
