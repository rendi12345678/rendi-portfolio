import React from "react";

function ContactCard({ icon, text, link }) {
  return (
    <li>
      <div className="icon">
        <img src={icon} alt="Icon" />
      </div>
      <a href={link}>
        <p>{text}</p>
      </a>
    </li>
  );
}

export default ContactCard;
