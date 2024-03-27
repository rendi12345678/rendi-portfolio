import React, { useEffect, useRef } from "react";

function ServiceCard({ title, description, delay }) {
  const liRef = useRef(null);

  useEffect(() => {
    liRef.current.style = `--delay: ${delay};`;
  }, [delay]);

  return (
    <li ref={liRef} className="reveal">
      <h4>{title}</h4>
      <p>{description}</p>
    </li>
  );
}

export default ServiceCard;
