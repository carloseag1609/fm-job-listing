import { router } from "../trpc";
import { authRouter } from "./auth";
import { jobsRouter } from "./jobs";

export const appRouter = router({
  auth: authRouter,
  jobs: jobsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
