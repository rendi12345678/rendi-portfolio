import React from 'react';
import '../styles/skills.css';
import '../styles/reset.css';

const Skills = () => {
  return (
      <section className="skills">
        <h1>My <span>Skills</span></h1>
        <div className="skill-list">
        <div>
          <img src="/img/html-5.png" 
               alt="HTML Icon"
               title="HTML Icon"/>
        </div>
        <div>
          <img src="/img/5968242.png" 
               alt="HTML Icon"
               title="HTML Icon"/>
        </div>
        <div>
          <img src="/img/5968292.png"
               alt="HTML Icon"
               title="HTML Icon"
               className="javascript"/>
        </div>
        <div>
          <img src="/img/nodejs.jpg"
               alt="HTML Icon"
               title="HTML Icon"/>
        </div>
        <div>
          <img src="/img/1_7G9vb_q5MA8_C_8HtwMfqw.png"
               alt="HTML Icon"
               title="HTML Icon"/>
        </div>
        <div>
          <img src="/img/ei_1696350797510-removebg-preview.png"
               alt="HTML Icon"
               title="HTML Icon"/>
        </div>
        <div>
          <img src="/img/2560px-MongoDB_Logo.svg.png" 
               alt="HTML Icon"
               title="HTML Icon"/>
        </div>
        </div>
      </section>
  );
}

export default Skills;