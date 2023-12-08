import React from "react";
import "../styles/projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>
        My <span>Projects</span>
      </h2>
      <div className="project-list2">
        <figure className="project">
          <img
            src="/img/eletype.png"
            alt="Project Image"
            title="Project Image"
          />
        </figure>
      </div>
    </section>
  );
};

export default Projects;
