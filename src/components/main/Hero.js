import React from "react";
import "../../assets/styles/hero.css";
import useAppContext from "../../hooks/useAppContext";
import useButtons from "../../hooks/useButtons";
import Container from "../ui/Container";

function Hero() {
  const { contactRef } = useAppContext();
  const { PrimaryButton } = useButtons();
  const scrollToElement = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      <Container>
        <div className="info">
          <div className="circle-image reveal"></div>
          <h5 className="hero-sub-title reveal">Hi, I'm Rendi</h5>
          <h1 className="hero-title reveal">
            I'm a Web <span>Developer</span>
          </h1>
          <p className="hero-description reveal">
            I specialize in translating design concepts into code, crafting
            interactive web experiences across devices and platforms
          </p>
          <PrimaryButton
            text="Contact Me"
            className="contact-btn reveal"
            onClick={scrollToElement}
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
