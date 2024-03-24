import React from "react";
import List from "./List";

function NavList({ children }) {
  return (
    <nav>
      <List>{children}</List>
    </nav>
  );
}

export default NavList;
