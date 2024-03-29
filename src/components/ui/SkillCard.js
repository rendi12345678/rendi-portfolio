import React, { useEffect, useRef } from "react";
import useDelay from "../../hooks/useDelay";

function SkillCard({ text, delay }) {
  const liRef = useRef(null);
  useDelay({ delay, ref: liRef });

  useEffect(() => {
    liRef.current.style = `--delay: ${delay};`;
  }, [delay]);

  return (
    <li ref={liRef} className="reveal">
      <div>
        <p>{text}</p>
      </div>
    </li>
  );
}

export default SkillCard;
