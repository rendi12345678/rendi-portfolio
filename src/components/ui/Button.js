import React from "react";

function Button({ text, type, size, color, className = "" }) {
  return (
    <button
      type={type}
      className={`${size}-size-btn ${color}-btn ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
