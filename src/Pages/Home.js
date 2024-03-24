import React from "react";
import About from "../components/main/About";
import Hero from "../components/main/Hero";
import Services from "../components/main/Services";
import Skills from "../components/main/Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
    </>
  );
};

export default Home;
