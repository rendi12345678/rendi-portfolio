import React from "react";
import "../styles/reset.css";
import "../styles/project.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Project = () => {
  return (
    <section className="project-section" id="project-section">
      <div className="project-title">
        <h1>Portfolio</h1>
        <p>My projects</p>
      </div>
      <div className="project-list">
        <figure className="project">
          <img
            src="/img/eletype.png"
            alt="Project Image"
            title="Project Image"
          />
          <div>
            <h3>Typing Test Game</h3>
            <figcaption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium dolorem animi provident voluptatem temporibus.
            </figcaption>
            <div>
              <button className="view-code-btn">Code</button>
              <button className="demo-btn">Demo</button>
            </div>
          </div>
        </figure>
        <figure className="project">
          <img
            src="/img/eletype.png"
            alt="Project Image"
            title="Project Image"
          />
          <div>
            <h3>Typing Test Game</h3>
            <figcaption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium dolorem animi provident voluptatem temporibus.
            </figcaption>
            <div>
              <button className="view-code-btn">Code</button>
              <button className="demo-btn">Demo</button>
            </div>
          </div>
        </figure>
      </div>
      <HashLink className="show-all-btn" smooth to="/projects/#projects">
        Show All
      </HashLink>
    </section>
  );
};

export default Project;
