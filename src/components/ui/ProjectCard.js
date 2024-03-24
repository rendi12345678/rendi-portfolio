import React from "react";

function ProjectCard({ imageUrl, title, linkdemo, description }) {
  return (
    <li>
      <figure className="project-image">
        <img src={imageUrl} alt="Project" />
      </figure>
      <div className="project-details">
        <h4>{title}</h4>
        <h5 className="link-demo">
          Demo :{" "}
          <a href={linkdemo} target="_blank">
            {linkdemo}
          </a>
        </h5>
        <p className="project-description">{description}</p>
      </div>
    </li>
  );
}

export default ProjectCard;
