import { publicProcedure, router } from "../trpc";

export const jobsRouter = router({
  getJobs: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.jobPost.findMany({
      include: {
        company: true,
        languages: true,
        tools: true,
      },
    });
  }),
});
