import React from "react";

function Title({ title, description, className = "" }) {
  return (
    <div className={`title ${className}`}>
      <h2>{title}</h2>
      <h4>{description}</h4>
    </div>
  );
}

export default Title;
