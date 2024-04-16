import React, { useRef } from "react";
import useDelay from "../../hooks/useDelay";

function ServiceCard({ title, description, delay }) {
  const liRef = useRef(null);
  useDelay({ delay, ref: liRef });

  return (
    <li ref={liRef} className="reveal">
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default ServiceCard;
