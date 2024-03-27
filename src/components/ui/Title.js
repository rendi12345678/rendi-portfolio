import React from "react";

function Title({ title, description, className = "" }) {
  return (
    <div className={`title ${className}`}>
      <h2>{title}</h2>
      <h5>{description}</h5>
    </div>
  );
}

export default Title;
