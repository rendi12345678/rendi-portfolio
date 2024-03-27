import React, { useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";

function LinkItem({ to, text, delay }) {
  const liRef = useRef(null);

  useEffect(() => {
    liRef.current.style = `--delay: ${delay}`;
  }, [delay]);

  return (
    <li ref={liRef}>
      <HashLink to={to} smooth>
        {text}
      </HashLink>
    </li>
  );
}

export default LinkItem;
