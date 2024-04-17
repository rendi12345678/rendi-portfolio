import React from "react";
import List from "./List";

function NavList({ children }) {
  return (
    <>
      <List>{children}</List>
    </>
  );
}

export default NavList;
