import React, { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import useDelay from "../../hooks/useDelay";

function LinkItem({ to, text, delay }) {
  const liRef = useRef(null);
  useDelay({ delay, ref: liRef });

  return (
    <li ref={liRef} className="reveal">
      <HashLink to={to} smooth>
        {text}
      </HashLink>
    </li>
  );
}

export default LinkItem;
