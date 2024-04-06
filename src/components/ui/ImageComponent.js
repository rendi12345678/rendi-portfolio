import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

function ImageComponent({ src, hash, alt }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();

    img.onload = () => setImageLoaded(true);

    img.src = src;
  }, [src, hash, alt]);

  return (
    <>
      {!imageLoaded ? (
        <Blurhash
          hash={hash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      ) : (
        <img src={src} alt={alt} />
      )}
    </>
  );
}

export default ImageComponent;
