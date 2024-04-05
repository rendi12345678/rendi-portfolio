import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

function HeroImage() {
  return (
    <picture className="hero-image reveal">
      <LazyLoadImage
        src={"/images/background1-1300.webp"}
        width="100%"
        height="100%"
        placeholderSrc="/images/bg1-100.webp"
        effect="blur"
        className="reveal"
      />
    </picture>
  );
}

export default HeroImage;
