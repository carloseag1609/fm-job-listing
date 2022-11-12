import { useState, useEffect } from "react";

type BreakpointValues = 640 | 768 | 1024 | 1280 | 1536;

type MediaFeature = "min-width" | "max-width";

type MediaQueryString = `(${MediaFeature}: ${BreakpointValues}px)`;

const useMediaQuery = (query: MediaQueryString) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
