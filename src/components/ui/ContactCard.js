import React, { useRef } from "react";
import useDelay from "../../hooks/useDelay";

function ContactCard({ icon, text, delay, type, url }) {
  const liRef = useRef(null);
  useDelay({ delay, ref: liRef });

  return (
    <li ref={liRef} className="reveal">
      <div className="icon">
        <img src={icon} alt="Icon" />
      </div>
      {type === "linkedin" || type === "github" ? <a href={url}>{text}</a> : <p>{text}</p>}
    </li>
  );
}

export default ContactCard;
