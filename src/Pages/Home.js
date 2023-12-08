import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Project from '../components/Project';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
    <Hero/>
    <div className="container-section">
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
    </div>
    </>
  );
}

export default Home;