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
      <div class="hero-container">
        <div className="hero-text">
          <h1>
            HI I AM <span>RENDI</span>
          </h1>
          <h3>I am a Frontend Developer</h3>
          <p>
            In a digital realm, I craft seamless, user-centric interfaces,
            weaving visionary designs into pixel-perfect stories.
          </p>
          <button className="contact-btn" onClick={scrollToContactSection}>
            Contact Me
          </button>
        </div>
        <figure className="hero-image">
          <img src="/img/rendi.jpg" alt="Hero Image" title="hero-image" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
