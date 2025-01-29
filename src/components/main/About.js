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
            Hello, I'm Rendi Virgantara Setiawan, a Full-Stack Developer
            specializing in Next.js, TypeScript, Rust, Tailwind CSS, and
            MongoDB. Currently in my first year of college, I focus on building
            scalable, maintainable, and high-performance app solutions.
            Experienced in using Tauri to create cross-device apps for mobile,
            web, and desktop. Passionate about cybersecurity as a hobby and
            adopting Web3 technologies. Always eager to collaborate and
            contribute to innovative projects, while expanding my skills in
            emerging technologies to create impactful solutions
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;
