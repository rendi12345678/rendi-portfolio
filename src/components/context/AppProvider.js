import React, { useRef } from "react";
import { createContext } from "use-context-selector";

export const AppContext = createContext(null);

function AppProvider({ children }) {
  const contactRef = useRef(null);

  const contextValues = { contactRef };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
