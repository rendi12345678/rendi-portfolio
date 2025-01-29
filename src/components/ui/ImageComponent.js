import React, { useEffect, useState } from "react";

function ImageComponent({ src, alt }) {
  return (
    <>
      <img src={src} alt={alt} />
    </>
  );
}

export default ImageComponent;
