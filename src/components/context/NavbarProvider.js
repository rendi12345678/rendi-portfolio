import React, { useRef } from "react";
import { createContext } from "use-context-selector";

export const NavbarContext = createContext(null);

function NavbarProvider({ children }) {
  const navbarRef = useRef(null);
  const hamburgerMenuRef = useRef(null);

  const contextValues = {
    navbarRef,
    hamburgerMenuRef,
  };

  return (
    <NavbarContext.Provider value={contextValues}>
      {children}
    </NavbarContext.Provider>
  );
}

export default NavbarProvider;
