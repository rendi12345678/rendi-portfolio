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
            Hello, I'm Rendi Virgantara Setiawan, a meticulous web developer
            from Indonesia. With a deep passion for coding and calisthenics, I
            blend precision and creativity to craft bespoke websites for
            businesses. Dedicated to delivering exceptional results, I create
            digital experiences that resonate with your audience and propel your
            brand forward. Let's collaborate to elevate your online presence for
            success.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;
