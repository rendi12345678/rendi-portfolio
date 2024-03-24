import React from "react";
import "../../assets/styles/hero.css";
import useButtons from "../../hooks/useButtons";
import Container from "../ui/Container";

function Hero() {
  const { PrimaryButton } = useButtons();
  // const scrollToElement = () => {
  //   if (contactRef.current) {
  //     contactRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <section id="hero" className="hero">
      <Container>
        <div className="info">
          <div className="circle-image"></div>
          <h5>Hi, I'm Rendi</h5>
          <h1>
            I'm React Js <span>Developer</span>
          </h1>
          <p>
            I specialize in converting design concepts into code, ensuring
            responsiveness and turning ideas into reality.
          </p>
          <PrimaryButton text="Contact Me" />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
