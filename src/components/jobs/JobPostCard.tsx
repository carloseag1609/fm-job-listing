import type { Company, JobPost, Language, Tool } from "@prisma/client";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useTags } from "../../hooks/useTags";

interface Props {
  job: JobPost & {
    company: Company;
    languages: Language[];
    tools: Tool[];
  };
}

dayjs.extend(relativeTime);

export const JobPostCard = ({ job }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="relative flex items-center justify-between rounded-lg bg-white p-6 pl-8 shadow-lg md:max-h-48">
      {job.new && (
        <div className="absolute top-0 left-0 h-full w-1 rounded-tl-md rounded-bl-md bg-[#5ba4a4]"></div>
      )}
      <div className="flex w-full justify-between">
        <div className="relative flex w-full gap-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={job.company.logo}
            alt={`${job.company.name} logo`}
            className="absolute -top-10 left-0 w-12 md:static md:h-auto md:w-[120px]"
          />
          <div className="flex w-full flex-col justify-evenly">
            <div className="flex items-center gap-5 pt-5 md:pt-0">
              <span className="text-xl font-semibold text-[#5ba4a4]">
                {job.company.name}
              </span>
              <div className="flex gap-2">
                {job.new && (
                  <span className="inline-flex h-[1.5rem] w-max items-center justify-center whitespace-nowrap rounded-full bg-[#5ba4a4] px-[0.5rem] py-0 text-xs font-medium uppercase leading-[0rem] text-white">
                    new!
                  </span>
                )}
                {job.featured && (
                  <span className="inline-flex h-[1.5rem] w-max items-center justify-center whitespace-nowrap rounded-full bg-[#2c3a3a] px-[0.5rem] py-0 text-xs font-medium uppercase leading-[0rem] text-white">
                    featured
                  </span>
                )}
              </div>
            </div>
            <div className="my-2 flex w-full justify-between md:my-0">
              <div className="flex w-full flex-col">
                <div className="md:flex md:w-full md:items-center md:justify-between">
                  <a
                    className="text-lg font-semibold transition hover:text-[#5ba4a4]"
                    href=""
                  >
                    {job.position}
                  </a>
                  {isDesktop && (
                    <div className="flex max-w-full flex-wrap gap-2">
                      {job.languages.map(({ name }) => (
                        <TagChip name={name} key={name} />
                      ))}
                      {job.tools.map(({ name }) => (
                        <TagChip name={name} key={name} />
                      ))}
                    </div>
                  )}
                </div>
                <div className="space-x-3 text-gray-600">
                  <span>
                    {dayjs(new Date(job.createdAt).toDateString()).fromNow()}
                  </span>
                  <span>•</span>
                  <span>{job.contractType}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
                <div className="my-4 h-[1px] w-full bg-[#7b8e8e] md:hidden"></div>
              </div>
            </div>
            {!isDesktop && (
              <div className="flex max-w-full flex-wrap gap-2">
                {job.languages.map(({ name }) => (
                  <TagChip name={name} key={name} />
                ))}
                {job.tools.map(({ name }) => (
                  <TagChip name={name} key={name} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface TagChipProps {
  name: string;
}

const TagChip = ({ name }: TagChipProps) => {
  const { addTag } = useTags();

  const onAddTag = () => {
    addTag(name);
    window.scrollTo(0, 0);
  };

  return (
    <span
      key={name}
      className="flex h-8 cursor-pointer items-center justify-center rounded-md bg-[#eef6f6] p-2 font-semibold text-[#5ba4a4] transition hover:bg-[#5ba4a4] hover:text-white"
      onClick={onAddTag}
    >
      {name}
    </span>
  );
};
