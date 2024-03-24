import React from "react";

function Title({ title, description }) {
  return (
    <div className="title">
      <h2>{title}</h2>
      <h5>{description}</h5>
    </div>
  );
}

export default Title;
