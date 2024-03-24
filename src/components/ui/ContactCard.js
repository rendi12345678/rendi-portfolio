import React from "react";

function ContactCard({ title, text, link }) {
  return (
    <li>
      <h5>{title} :</h5> &nbsp;
      <a href={link}>
        <p>{text}</p>
      </a>
    </li>
  );
}

export default ContactCard;
