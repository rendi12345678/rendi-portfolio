import React from "react";
import "../../assets/styles/about.css";
import Container from "../ui/Container";
import Title from "../ui/Title";

function About() {
  return (
    <section className="about reveal" id="about">
      <Container>
        <div className="about-image">
          <img src="/images/rendi1.webp" alt="Rendi" className="reveal" />
        </div>
        <div className="about-info">
          <Title
            title="About Me"
            description="My introduction"
            className="reveal"
          />
          <p className="reveal">
            Hi, my name is Rendi Virgantara Setiawan. I am a web developer based
            in Indonesia who is super passionate about coding and also loves
            calisthenics. As a web developer, I am a web developer. I help
            business owners get online to get more customers. I do it because I
            love it and I am super passionate about it. It makes me incredibly
            happy in life because I can provide value to other people.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;
