import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";

interface ContextProps {
  selectedTags: string[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  clearTags: () => void;
}

export const TagsContext = createContext<ContextProps>({} as ContextProps);

export const TagsProvider = ({ children }: PropsWithChildren) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const removeTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    }
  };

  const clearTags = () => setSelectedTags([]);

  return (
    <TagsContext.Provider
      value={{ selectedTags, addTag, removeTag, clearTags }}
    >
      {children}
    </TagsContext.Provider>
  );
};
