import React from 'react';
import '../styles/reset.css';
import '../styles/project.css';
import weatherImage from '../img/wheater-app.jpg';
import movieImage from '../img/movie.jpg';
import todoImage from '../img/todo.jpg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Project = () => { 
return (
   <section className="project-section" id="project-section">
     <h1>My <span>Projects</span></h1>
     <div className="project-list">
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
    </div>
    <HashLink className="show-all-btn" smooth to="/projects/#projects">Show All</HashLink>
   </section>
);
}

export default Project;