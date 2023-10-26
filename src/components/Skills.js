import React from 'react';
import '../styles/skills.css';
import '../styles/reset.css';
import htmlIcon from '../img/html-5.png';
import mongoIcon from '../img/2560px-MongoDB_Logo.svg.png';
import reactIcon from '../img/ei_1696350797510-removebg-preview.png';
import cssIcon from '../img/5968242.png';
import nodeIcon from '../img/nodejs.jpg';
import expressIcon from '../img/1_7G9vb_q5MA8_C_8HtwMfqw.png';
import javascriptIcon from '../img/5968292.png';

const Skills = () => {
  return (
      <section className="skills">
        <h1>My <span>Skills</span></h1>
        <div className="skill-list">
        <div>
          <img src={htmlIcon} 
               alt="HTML Icon"
               title="HTML Icon"/>
        </div>
        <div>
          <img src={cssIcon} 
               alt="HTML Icon"
               title="HTML Icon"/>
        </div>
        <div>
          <img src={javascriptIcon} 
               alt="HTML Icon"
               title="HTML Icon"
               className="javascript"/>
        </div>
        <div>
          <img src={nodeIcon} 
               alt="HTML Icon"
               title="HTML Icon"/>
        </div>
        <div>
          <img src={expressIcon} 
               alt="HTML Icon"
               title="HTML Icon"/>
        </div>
        <div>
          <img src={reactIcon} 
               alt="HTML Icon"
               title="HTML Icon"/>
        </div>
        <div>
          <img src={mongoIcon} 
               alt="HTML Icon"
               title="HTML Icon"/>
        </div>
        </div>
      </section>
  );
}

export default Skills;