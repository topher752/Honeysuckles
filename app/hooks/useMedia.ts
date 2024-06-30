import { useEffect, useState } from "react";

export function useMedia(test: string) {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(test);
      if (media.matches !== match) {
        setMatch(media.matches);
      }
      const listener = () => setMatch(media.matches);
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [test]);
  return match;
}
