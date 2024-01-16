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
          <h3>I am a Full Stack Developer</h3>
          <p>
          In the digital realm, I create seamless, user-centric interfaces with visionary designs. From front-end elegance to back-end robustness, I craft pixel-perfect stories in code.
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
