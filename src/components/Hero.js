import React from "react";
import "../styles/reset.css";

const Hero = () => {
  const scrollToContactSection = () => {
    const element = document.getElementById("contact-section");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" id="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            HI I AM <span>RENDI</span>
          </h1>
          <h3>I am a Front End Developer</h3>
          <p>
            I specialize in converting design concepts into code, crafting
            elegant user interfaces with responsive layouts, captivating
            animations, and intuitive interactions to enhance user engagement
            and satisfaction.
          </p>
          <button className="contact-btn" onClick={scrollToContactSection}>
            Contact Me
          </button>
        </div>
        <figure className="hero-image">
          <div></div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
