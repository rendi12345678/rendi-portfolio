import React from "react";
import "../../assets/styles/hero.css";
import Container from "../ui/Container";
import HeroInfo from "../ui/HeroInfo";

function Hero() {
  return (
    <section id="hero reveal" className="hero">
      <Container>
        <HeroInfo />
      </Container>
    </section>
  );
}

export default Hero;
