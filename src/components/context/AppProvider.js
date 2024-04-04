import React, { useRef } from "react";
import { createContext } from "use-context-selector";

export const AppContext = createContext(null);

function AppProvider({ children }) {
  const aboutRef = useRef(null);

  const contextValues = { aboutRef };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
