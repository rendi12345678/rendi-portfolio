import React from "react";

function ServiceCard({ title, description }) {
  return (
    <li>
      <h4>{title}</h4>
      <p>{description}</p>
    </li>
  );
}

export default ServiceCard;
