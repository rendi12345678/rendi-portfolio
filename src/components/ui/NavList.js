import React from "react";
import Ul from "./Ul";

function NavList({ children }) {
  return (
    <nav>
      <Ul>{children}</Ul>
    </nav>
  );
}

export default NavList;
