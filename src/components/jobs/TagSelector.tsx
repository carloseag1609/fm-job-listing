import { useTags } from "../../hooks/useTags";
import { XMarkIcon } from "../shared/XMarkIcon";

export const TagSelector = () => {
  const { selectedTags, clearTags, removeTag } = useTags();

  return (
    <div
      className={`absolute ${
        selectedTags.length === 0 ? "scale-0" : "scale-100"
      } -bottom-10 left-1/2 flex w-[90%] -translate-x-1/2 transform items-center justify-between gap-8 rounded-lg bg-white py-6 px-6 shadow-xl transition md:px-12`}
    >
      <div className="flex max-h-24 flex-wrap gap-2 overflow-y-auto md:max-h-fit">
        {selectedTags.map((tag) => (
          <div
            key={tag}
            className="flex h-8 cursor-pointer items-center rounded-md bg-[#eef6f6] font-semibold text-[#5ba4a4]"
          >
            <span className="my-3 mx-3">{tag}</span>
            <button
              className="flex h-full w-8 items-center justify-center rounded-tr-md rounded-br-md bg-[#5ba4a4] transition hover:bg-[#2c3a3a]"
              onClick={() => removeTag(tag)}
            >
              <XMarkIcon className="h-5 w-5 text-white" />
            </button>
          </div>
        ))}
      </div>
      <button className="border-none bg-white outline-none">
        <span
          className="font-semibold text-[#5ba4a4] underline"
          onClick={clearTags}
        >
          Clear
        </span>
      </button>
    </div>
  );
};
