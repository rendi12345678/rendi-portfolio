import React from "react";
import "../styles/reset.css";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact-section">
      <h1>
        Contact <span>Me</span>
      </h1>
      <div className="contact-list">
        <figure class="email">
          <img src="/img/email.png" alt="" />
          <figcaption>hardleberg@gmail.com</figcaption>
        </figure>
        <figure className="location">
          <img src="/img/location.png" alt="" />
          <figcaption>Jombang, East Java, Indonesia</figcaption>
        </figure>
        <figure className="phone-number">
          <img src="/img/telephone.png" alt="" />
          <figcaption>+6285733300369</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Contact;
