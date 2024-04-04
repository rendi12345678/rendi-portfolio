import React, { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import useDelay from "../../hooks/useDelay";
import useNavbar from "../../hooks/useNavbar";

function LinkItem({ to, text, delay }) {
  const { toggleNav } = useNavbar();
  const liRef = useRef(null);
  useDelay({ delay, ref: liRef });

  return (
    <li ref={liRef} className="reveal" onClick={toggleNav}>
      <HashLink to={to} smooth>
        {text}
      </HashLink>
    </li>
  );
}

export default LinkItem;
