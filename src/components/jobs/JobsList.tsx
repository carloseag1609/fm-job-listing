import { useMemo } from "react";
import { useTags } from "../../hooks/useTags";
import { trpc } from "../../utils/trpc";
import { Loader } from "../shared/Loader";
import { JobPostCard } from "./";

export const JobsList = () => {
  const { selectedTags } = useTags();
  const { data: jobs } = trpc.jobs.getJobs.useQuery();

  const filteredJobs = useMemo(
    () =>
      jobs?.filter((job) => {
        const languages = job.languages.map((lang) => lang.name);
        const tools = job.tools.map((tool) => tool.name);
        const allTags = [...languages, ...tools];
        for (const tag of allTags) {
          if (selectedTags.includes(tag)) {
            return job;
          }
        }
      }),
    [selectedTags, jobs]
  );

  const jobsToDisplay =
    selectedTags.length && filteredJobs?.length ? filteredJobs : jobs;

  if (!jobs) {
    return (
      <div className="mt-24 flex w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="my-20 mx-auto w-[90%] space-y-10 md:my-16 md:space-y-6">
      {jobsToDisplay &&
        jobsToDisplay.map((job) => <JobPostCard key={job.id} job={job} />)}
    </div>
  );
};
