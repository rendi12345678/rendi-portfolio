import React from "react";
import Container from "../ui/Container";
import ImageComponent from "../ui/ImageComponent";
import Title from "../ui/Title";
import useAppContext from "./../../hooks/useAppContext";

function About() {
  const { aboutRef } = useAppContext();

  return (
    <section className="about reveal" id="about" ref={aboutRef}>
      <Container>
        <picture className="about-image reveal">
          <ImageComponent
            src="/images/rendi1-650px.webp"
            hash="LNHL$9WC0aj]00ofXVaz?]ax=;j]"
            alt="Rendi"
          />
        </picture>
        <div className="about-info">
          <Title
            title="About Me"
            description="My introduction"
            className="reveal"
          />
          <p className="reveal">
            Hello, I'm Rendi Virgantara Setiawan, a passionate web developer
            based in Indonesia. With a deep passion for coding and calisthenics,
            I like to build interactive and responsive websites that can look
            good on different platforms and browsers for business owners. I am
            dedicated to delivering exceptional results. I create digital
            experiences that resonate with your audience and propel your brand
            forward. Let's collaborate to elevate your brand online for success
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;
