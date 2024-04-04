import React from "react";
import "../../assets/styles/about.css";
import Container from "../ui/Container";
import Title from "../ui/Title";
import useAppContext from "./../../hooks/useAppContext";

function About() {
  const { aboutRef } = useAppContext();

  return (
    <section className="about reveal" id="about" ref={aboutRef}>
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
            calisthenics. As a web developer, i help business owners get online
            to get more customers. I do it because i love it and i am super
            passionate about it. It makes me incredibly happy in life because i
            can provide value to other people.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;
