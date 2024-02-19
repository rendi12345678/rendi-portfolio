import React from "react";
import "../styles/about.css";
import "../styles/reset.css";

const About = () => {
  const goToAnotherPage = (url) => {
    window.location.href = url;
  };

  return (
    <section className="about-section" id="about-section">
      <div className="about-title">
        <h2>About Me</h2>
        <p>My intoduction</p>
      </div>
      <img src="/img/rendi2.jpg" alt="About" title="About" />
      <div className="texts">
        <p>
          As a Front End Developer, I excel in crafting innovative solutions
          that prioritize seamless user experiences and elegant designs. With a
          keen eye for detail and a dedication to clean code practices, I
          specialize in delivering captivating frontend applications that engage
          users and elevate digital experiences.
        </p>
        <h3>Find Me on Social Media</h3>
        <div className="list-of-social-media">
          <figure>
            <img
              src="/img/github-logo.png"
              alt=""
              onClick={() =>
                goToAnotherPage("https://github.com/rendi12345678")
              }
            />
          </figure>
          <figure>
            <img
              src="/img/facebook.png"
              alt=""
              onClick={() =>
                goToAnotherPage(
                  "https://www.facebook.com/rendi.v.setiawan.9?mibextid=ZbWKwL"
                )
              }
            />
          </figure>
          <figure>
            <img
              src="/img/whatsapp.png"
              alt=""
              onClick={() => goToAnotherPage("https://wa.me/6285733300369")}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
