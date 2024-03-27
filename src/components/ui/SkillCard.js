import React, { useEffect, useRef } from "react";

function SkillCard({ text, delay }) {
  const liRef = useRef(null);

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
