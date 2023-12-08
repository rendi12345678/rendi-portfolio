import React from 'react';
import '../styles/about.css';
import '../styles/reset.css';

const About = () => {
  return (
    <section className="about-section" id="about-section">
      <img src="/img/rendi.jpg" 
           alt="About Image"
           title="About Image"/>
      <div className="text-container">
      <h1 className="about-title">About <span>Me</span></h1>
      <div className="texts">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. eligendi ducimus mollitia similique, expedita saepe Lorem ipsum dolor sit amet, consecteur adipisicing elit. Cupiditate, quod, quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, quae, velit.
      </p>
      </div>
      </div>
    </section>
  );
}

export default About;