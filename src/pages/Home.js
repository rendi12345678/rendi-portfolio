import React, { lazy, Suspense } from "react";
import About from "../components/main/About";
import Contacts from "../components/main/Contacts";
import Footer from "../components/main/Footer";
import Hero from "../components/main/Hero";
import Services from "../components/main/Services";
import Skills from "../components/main/Skills";
const Portfolio = lazy(() => import("../components/main/Portfolio"));

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Suspense fallback={null}>
        <Portfolio />
      </Suspense>
      {/* <Testimonials /> */}
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
