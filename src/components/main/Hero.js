import React from "react";
import Container from "../ui/Container";
import HeroImage from "../ui/HeroImage";
import HeroInfo from "../ui/HeroInfo";

function Hero() {
  return (
    <section id="hero" className="hero">
      <HeroImage />
      <Container>
        <HeroInfo />
      </Container>
    </section>
  );
}

export default Hero;
