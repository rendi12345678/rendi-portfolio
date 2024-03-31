import React from "react";

function SvgWrapper({ url, children, type }) {
  return (
    <a
      className="svg-wrapper"
      href={url}
      target="_blank"
      aria-label={type}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default SvgWrapper;
