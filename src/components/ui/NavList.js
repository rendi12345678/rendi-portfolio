import React from "react";
import useNavbarContext from "../../hooks/useNavbarContext";
import List from "./List";

function NavList({ children }) {
  const { navbarRef } = useNavbarContext();

  return (
    <>
      <List ref={navbarRef}>{children}</List>
    </>
  );
}

export default NavList;
