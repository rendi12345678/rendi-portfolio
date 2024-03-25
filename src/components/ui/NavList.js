import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import List from "./List";

function NavList({ children }) {
  return (
    <nav>
      <List>{children}</List>
      <HamburgerMenu />
    </nav>
  );
}

export default NavList;
