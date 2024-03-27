import React from "react";
import "../../assets/styles/about.css";
import Container from "../ui/Container";
import Title from "../ui/Title";

function About() {
  return (
    <section className="about" id="about">
      <Container>
        <div className="about-image reveal">
          <img src="/images/rendi2.jpg" alt="Rendi" className="reveal" />
        </div>
        <div className="about-info">
          <Title
            title="About Me"
            description="My introduction"
            className="reveal"
          />
          <p className="reveal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nisi
            cupiditate tempora atque odit adipisci tenetur at ullam, tempore
            animi velit aperiam doloremque rem excepturi quia magnam id est
            assumenda vitae quam? Ullam quisquam, aliquid quae vel eaque
            necessitatibus asperiores mollitia ut, quam itaque consequuntur.
            Maxime consequatur numquam error omnis.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;
