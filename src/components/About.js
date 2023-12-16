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
      <img src="/img/rendi.jpg" alt="About Image" title="About Image" />
      <div className="texts">
        <p>
        With a blend of creativity and precision, I embark on a journey to bridge the gap between design and functionality. My expertise lies in transforming ideas into interactive realities, and I thrive on the challenges of the ever-evolving digital landscape.
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
