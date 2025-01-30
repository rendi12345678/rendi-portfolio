import React, { useRef } from "react";
import useDelay from "../../hooks/useDelay";
import ImageComponent from "./ImageComponent";

function ProjectCard({
  imageUrl,
  sourceCode,
  title,
  linkdemo,
  description,
  delay,
}) {
  const itemRef = useRef();
  useDelay({ ref: itemRef, delay });

  const handleButtonClick = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <div className="item reveal" ref={itemRef}>
      <figure className="project-image">
        <ImageComponent src={imageUrl} alt="Project" />
      </figure>
      <div className="project-details">
        <h3>{title}</h3>

        <p className="project-description">{description}</p>
        <div className="button-container">
          <button
            onClick={() => handleButtonClick(linkdemo)}
            className="btn btn-demo"
          >
            Live Demo
          </button>

          <button
            onClick={() => handleButtonClick(sourceCode)}
            className="btn btn-source"
          >
            Source Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
