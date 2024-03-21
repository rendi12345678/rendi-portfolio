import React from "react";
import "../../assets/styles/hero.css";
import useButtons from "../../hooks/useButtons";

function Hero() {
  const { PrimaryButton } = useButtons();
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="info">
          <div className="circle-image"></div>
          <h4>Hi, I am Rendi</h4>
          <h1>
            I am React Js <span>Developer</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            cupiditate repudiandae sed quos aliquid at quibusdam, eius soluta
            mollitia ducimus.
          </p>
          <PrimaryButton text="Contact Me" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
