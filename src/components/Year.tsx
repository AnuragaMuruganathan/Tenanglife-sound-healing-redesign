"use client";

import { useSyncExternalStore } from "react";

// Prerendered with the build year, then read from the clock on the client.
const BUILD_YEAR = 2026;
const subscribe = () => () => {};

export function Year() {
  const year = useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => BUILD_YEAR);
  return <>{year}</>;
}
