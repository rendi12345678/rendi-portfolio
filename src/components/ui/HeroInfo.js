import React from "react";
import useAppContext from "./../../hooks/useAppContext";
import useButtons from "./../../hooks/useButtons";

function HeroInfo() {
  const { aboutRef } = useAppContext();
  const { PrimaryButton } = useButtons();
  const scrollToElement = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="info">
      <h1 className="hero-title reveal">
        Hey There! <br /> I'm Rendi a <span>Freelance Web Developer</span>
      </h1>
      <p className="hero-description reveal">
        I help business owners grow their businesses through custom website
        solutions to improve their brand online
      </p>
      <PrimaryButton
        text="Tell Me More"
        className="cta-btn reveal"
        onClick={scrollToElement}
      />
    </div>
  );
}

export default HeroInfo;
