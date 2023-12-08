import React from "react";
import "../styles/reset.css";
import "../styles/project.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Project = () => {
  return (
    <section className="project-section" id="project-section">
      <h1>
        My <span>Projects</span>
      </h1>
      <div className="project-list">
        <figure className="project">
          <img src="/img/eletype.png" alt="Project Image" title="Project Image" />
        </figure>
        <figure className="project">
          <img src="/img/eletype.png" alt="Project Image" title="Project Image" />
        </figure>
        <figure className="project">
          <img src="/img/eletype.png" alt="Project Image" title="Project Image" />
        </figure>
      </div>
      <HashLink className="show-all-btn" smooth to="/projects/#projects">
        Show All
      </HashLink>
    </section>
  );
};

export default Project;
