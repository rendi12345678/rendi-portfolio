import React from 'react';
import '../styles/reset.css';

const Hero = () => { 
  
  const scrollToContactSection = () => {
    const element = document.getElementById('contact-section');
    
    if(element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
  
    return (
     <section className="hero-section" id="hero-section">
       <div class="hero-container">
         <div className="hero-text">
         <h1>HI I AM <span>RENDI</span></h1>
         <h2>I am a Fullstack Developer</h2>
         <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ullam repudiandae, expedita, dolor.
         </p>
         <button className="contact-btn"
                 onClick={scrollToContactSection}>Contact Me</button>
       </div>
       <figure className="hero-image">
           <img src="/img/rendi.jpg" 
                alt="Hero Image" 
                title="hero-image"/>
       </figure>
       </div>
     </section>
    );
}

export default Hero;