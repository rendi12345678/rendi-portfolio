import React from 'react';
import '../styles/projects.css';
import weatherImage from '../img/wheater-app.jpg';
import movieImage from '../img/movie.jpg';
import todoImage from '../img/todo.jpg';
import calculatorImage from '../img/calculator.jpg';
import ecommerceImage from '../img/e-commerce.jpg';
import countdownImage from '../img/countdown-timer.jpg';

const Projects = () => {
  return (
    <section className="projects" id="projects">
     <h2>My <span>Projects</span></h2> 
      <div className="project-list2">
       <figure className="project">
       <img src={weatherImage} 
            alt="Project Image"
            title="Project Image"/>    
       </figure>
       <figure className="project">
       <img src={movieImage} 
            alt="Project Image"
            title="Project Image"/>    
       </figure>
       <figure className="project">
       <img src={todoImage} 
            alt="Project Image"
            title="Project Image"/>    
       </figure>
       <figure className="project">
       <img src={calculatorImage} 
            alt="Project Image"
            title="Project Image"/>    
       </figure>
       <figure className="project">
       <img src={ecommerceImage} 
            alt="Project Image"
            title="Project Image"/>    
       </figure>
       <figure className="project">
       <img src={countdownImage} 
            alt="Project Image"
            title="Project Image"/>    
       </figure>
    </div>
    </section>
  );
}

export default Projects;