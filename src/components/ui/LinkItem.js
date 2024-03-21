import React from "react";
import { Link } from "react-router-dom";

function LinkItem({ to, text }) {
  return (
    <li>
      <Link to={to}>{text}</Link>
    </li>
  );
}

export default LinkItem;
