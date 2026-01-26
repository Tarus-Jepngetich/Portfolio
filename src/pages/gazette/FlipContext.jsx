import { createContext, useContext } from "react";

const FlipContext = createContext(null);

export function FlipProvider({ value, children }) {
  return <FlipContext.Provider value={value}>{children}</FlipContext.Provider>;
}

export function useFlip() {
  return useContext(FlipContext);
}
