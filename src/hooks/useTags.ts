import { useContext } from "react";
import { TagsContext } from "../context/TagsContext";

export const useTags = () => useContext(TagsContext);
