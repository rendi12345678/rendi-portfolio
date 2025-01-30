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
        Hi There! <br /> I'm Rendi a <span>Full Stack Web Developer</span>
      </h1>
      <p className="hero-description reveal">
        Let's create a tailored app solution that will streamline and enhance
        your business operations, boost efficiency, and drive growth. With a
        custom-built application, you'll have a powerful tool designed
        specifically to meet your unique needs and challenges
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
