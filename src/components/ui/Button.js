import React from "react";

function Button({ text, type, size, color }) {
  return (
    <button type={type} S className={`${size}-size-btn ${color}-btn`}>
      {text}
    </button>
  );
}

export default Button;
