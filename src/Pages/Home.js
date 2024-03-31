import React from "react";
import About from "../components/main/About";
import Contacts from "../components/main/Contacts";
import Footer from "../components/main/Footer";
import Hero from "../components/main/Hero";
import Portfolio from "../components/main/Portfolio";
import Services from "../components/main/Services";
import Skills from "../components/main/Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
