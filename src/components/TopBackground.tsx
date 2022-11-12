import useMediaQuery from "../hooks/useMediaQuery";
import { TagSelector } from "./jobs";

export const TopBackground = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div
      className="relative h-32 w-full bg-[#5ba4a4]"
      style={{
        backgroundImage: isDesktop
          ? `url("/assets/bg-header-desktop.svg")`
          : `url("/assets/bg-header-mobile.svg")`,
      }}
    >
      <TagSelector />
    </div>
  );
};
