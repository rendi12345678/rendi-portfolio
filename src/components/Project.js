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
              This is my open source project that allows user to login / sign up, practice typing, and also with leaderboard feature
              to allows user see their ranking.
            </figcaption>
            <div>
              <button className="view-code-btn">Github Code</button>
              <button className="demo-btn">Demo</button>
            </div>
          </div>
        </figure>
        <figure className="project">
          <img
            src="/img/e1.png"
            alt="Project Image"
            title="Project Image"
          />
          <div>
            <h3>Online Shop</h3>
            <figcaption>
              This is my own project that allows user to see all products from database by certain category, and allows to see shopping cart.
            </figcaption>
            <div>
              <button className="view-code-btn">Github Code</button>
              <button className="demo-btn">Demo</button>
            </div>
          </div>
        </figure>
      </div>
      {/* <HashLink className="show-all-btn" smooth to="/projects/#projects">
        Show All
      </HashLink> */}
    </section>
  );
};

export default Project;
