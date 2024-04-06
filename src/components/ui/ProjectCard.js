import React, { useRef } from "react";
import useDelay from "../../hooks/useDelay";
import ImageComponent from "./ImageComponent";

function ProjectCard({ imageUrl, title, linkdemo, description, delay, hash }) {
  const itemRef = useRef();
  useDelay({ ref: itemRef, delay });

  return (
    <div className="item reveal" ref={itemRef}>
      <figure className="project-image">
        <ImageComponent src={imageUrl} hash={hash} alt="Project" />
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
