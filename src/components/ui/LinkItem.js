import React from "react";
import { HashLink } from "react-router-hash-link";

function LinkItem({ to, text }) {
  return (
    <li>
      <HashLink to={to} smooth>
        {text}
      </HashLink>
    </li>
  );
}

export default LinkItem;
