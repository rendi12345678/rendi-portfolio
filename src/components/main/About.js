import React from "react";
import "../../assets/styles/about.css";
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
            Hey there, I'm Rendi Virgantara Setiawan, a web developer based in
            Indonesia, on a mission to blend my passion for coding with the joy
            of calisthenics. When I'm not perfecting my push-ups, you'll find me
            crafting digital experiences as a web wizard. I'm not just
            passionate about coding. I'm obsessed! And what fuels my fire?
            Helping coffee shop owners thrive in the digital realm by building
            captivating websites that bring their brews to the world. Let's turn
            your coffee dreams into digital reality!
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;
