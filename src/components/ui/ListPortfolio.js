import React from "react";
import List from "./List";
import ProjectCard from "./ProjectCard";

const listPotfolio = [
  {
    title: "Fun Pilpres",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.",
    imageUrl: "/images/web-capres.png",
    linkDemo: "https://fun-pilpres.web.app",
  },
  {
    title: "Fun Pilpres",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.",
    imageUrl: "/images/web-capres.png",
    linkDemo: "https://fun-pilpres.web.app",
  },
];

function ListPortfolio() {
  return (
    <List className="list-portfolio">
      {listPotfolio.map(({ title, description, imageUrl, linkDemo }, index) => (
        <ProjectCard
          title={title}
          description={description}
          imageUrl={imageUrl}
          linkdemo={linkDemo}
          key={index}
        />
      ))}
    </List>
  );
}

export default ListPortfolio;
