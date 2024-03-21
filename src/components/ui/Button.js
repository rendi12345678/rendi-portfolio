import React from "react";

function Button({ text, type, size, color }) {
  const getButtonStyles = () => {
    if (color === "blue")
      return {
        backgroundColor: "var(--accent-color)",
        color: "var(--contrast-color)",
      };
  };

  const buttonStyles = getButtonStyles();

  return (
    <button type={type} style={buttonStyles} className={`${size}-size-btn`}>
      {text}
    </button>
  );
}

export default Button;
