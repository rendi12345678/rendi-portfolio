import React from "react";
import "../styles/about.css";
import "../styles/reset.css";

const About = () => {
  return (
    <section className="about-section" id="about-section">
      <div className="about-title">
        <h2>About Me</h2>
        <p>My intoduction</p>
      </div>
      <img src="/img/rendi2.jpg" alt="About" title="About" />
      <div className="texts">
        <p>
        As a full-stack developer, I thrive in crafting innovative solutions that seamlessly integrate front-end aesthetics with back-end functionality. With a passion for clean code and a commitment to delivering robust applications, I bring versatility and expertise to every project I undertake.
        </p>
        <h3>Find Me on Social Media</h3>
        <div className="list-of-social-media">
          <figure>
            <img src="/img/github-logo.png" alt="" />
          </figure>
          <figure>
            <img src="/img/facebook.png" alt="" />
          </figure>
          <figure>
            <img src="/img/whatsapp.png" alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
