import React, { useRef } from "react";
import useDelay from "../../hooks/useDelay";

function ProjectCard({ imageUrl, title, linkdemo, description, delay }) {
  const itemRef = useRef();
  useDelay({ ref: itemRef, delay });

  return (
    <div className="item reveal" ref={itemRef}>
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
    </div>
  );
}

export default ProjectCard;
