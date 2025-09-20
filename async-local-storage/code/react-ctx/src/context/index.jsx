import { createContext, useState } from "react";

export const CounterCtx = createContext();

export function CounterContextProvider({ children }) {
  const [number, setNumber] = useState(0);

  return <CounterCtx.Provider value={Object.freeze({number , setNumber})}>{children}</CounterCtx.Provider>;
}
