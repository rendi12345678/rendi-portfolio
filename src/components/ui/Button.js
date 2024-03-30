import React from "react";

function Button({ text, type, size, color, className = "", onClick, id }) {
  return (
    <button
      type={type}
      className={`${size}-size-btn ${color}-btn ${className}`}
      onClick={onClick}
      id={id}
    >
      {text}
    </button>
  );
}

export default Button;
