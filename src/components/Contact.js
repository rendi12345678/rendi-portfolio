import React from 'react';
import '../styles/reset.css';
import '../styles/contact.css';
import locationImage from '../img/location.png';
import emailImage from '../img/email.png';
import phoneImage from '../img/telephone.png';

const Contact = () => {
  return (
    <section class="contact-section"
             id="contact-section">
      <h1>Contact <span>Me</span></h1>
      <div class="contact-list">
        <figure class="email">
          <img src={emailImage} alt=""/>
          <figcaption>
           hardleberg@gmail.com
          </figcaption>
        </figure>
        <figure class="location">
          <img src={locationImage} alt=""/>
          <figcaption>
            Jombang, East Java, Indonesia
          </figcaption>
        </figure>
        <figure class="phone-number">
          <img src={phoneImage} alt=""/>
          <figcaption>
            +6285733300369
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Contact;