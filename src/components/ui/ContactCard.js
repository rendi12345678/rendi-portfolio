import React from "react";

function ContactCard({ icon, text }) {
  return (
    <li>
      <div className="icon">
        <img src={icon} alt="Icon" />
      </div>

      <p>{text}</p>
    </li>
  );
}

export default ContactCard;
