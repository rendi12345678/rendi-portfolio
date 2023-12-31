import React from "react";
import "../styles/reset.css";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact-section">
      <div className="contact-title">
        <h2>Contact Me</h2>
        <p>Reach me at</p>
      </div>
      <div className="contact-list">
        <figure class="email">
          <img src="/img/email.png" alt="email" />
          <figcaption>hardleberg@gmail.com</figcaption>
        </figure>
        <figure className="location">
          <img src="/img/location.png" alt="location" />
          <figcaption>Jombang, East Java, Indonesia</figcaption>
        </figure>
        <figure className="phone-number">
          <img src="/img/telephone.png" alt="telephone" />
          <figcaption>+6285733300369</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Contact;
