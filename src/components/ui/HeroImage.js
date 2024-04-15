import React from "react";
import ImageComponent from "./ImageComponent";

function HeroImage() {
  return (
    <picture className="hero-image reveal">
      <ImageComponent
        src="/images/background1.webp"
        hash="LfEV?3%MD%of~q%MWARj?bxaofj]"
        alt="lake"
      />
    </picture>
  );
}

export default HeroImage;
