import React from "react";

function Button({ text, type, color, className = "", onClick, id }) {
  return (
    <button
      type={type}
      className={`${color}-btn ${className}`}
      onClick={onClick}
      id={id}
    >
      {text}
    </button>
  );
}

export default Button;
