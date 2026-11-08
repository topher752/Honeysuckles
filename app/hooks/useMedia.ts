import { useCallback, useMemo, useSyncExternalStore } from "react";

export function useMedia(test: string) {
  const mediaQuery = useMemo(
    () => (typeof window === "undefined" ? null : window.matchMedia(test)),
    [test]
  );

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      if (!mediaQuery) return () => {};
      mediaQuery.addEventListener("change", onStoreChange);
      return () => mediaQuery.removeEventListener("change", onStoreChange);
    },
    [mediaQuery]
  );

  return useSyncExternalStore(
    subscribe,
    () => mediaQuery?.matches ?? false,
    // The server has no viewport, so nothing matches. Declaring this explicitly
    // keeps the first client render identical to the server's and avoids a
    // hydration mismatch.
    () => false
  );
}
