import React from 'react';
import '../styles/reset.css';
import facebookImage from '../img/1024px-2021_Facebook_icon.svg.png';
import rendiImage from '../img/rendi.jpg';
import githubImage from '../img/GitHub-Mark.png';
import whatsappImage from '../img/479px-WhatsApp_icon.png';

const Hero = () => { 
  
  const scrollToContactSection = () => {
    const element = document.getElementById('contact-section');
    
    // Jika element ada maka scroll
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
           <img src={rendiImage} 
                alt="Hero Image" 
                title="hero-image"/>
       </figure>
       </div>
     </section>
    );
}

export default Hero;