import React from "react";
import Container from "../ui/Container";
import HeroInfo from "../ui/HeroInfo";

function Hero() {
  return (
    <section id="hero" className="hero">
      <Container>
        <HeroInfo />
      </Container>
    </section>
  );
}

export default Hero;
