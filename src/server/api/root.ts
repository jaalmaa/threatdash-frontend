import { createTRPCRouter } from "~/server/api/trpc";
import { sessiondataRouter } from "~/server/api/routers/sessiondata";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  sessiondata: sessiondataRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
