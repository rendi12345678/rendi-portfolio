import React, { useRef } from "react";
import useDelay from "../../hooks/useDelay";

function SkillCard({ text, delay }) {
  const liRef = useRef(null);
  useDelay({ delay, ref: liRef });

  return (
    <li ref={liRef} className="reveal">
      <div>
        <p>{text}</p>
      </div>
    </li>
  );
}

export default SkillCard;
