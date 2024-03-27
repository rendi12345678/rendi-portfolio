import React from "react";
import List from "./List";
import ServiceCard from "./ServiceCard";

const listServices = [
  {
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nobis alias in fugit",
    delay: 1,
  },
  {
    title: "Maintenance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nobis alias in fugit",
    delay: 2,
  },
  {
    title: "Debugging",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nobis alias in fugit",
    delay: 3,
  },
];

function ListServices() {
  return (
    <>
      <List className="list-services">
        {listServices.map(({ title, description, delay }, index) => (
          <ServiceCard
            title={title}
            description={description}
            delay={delay}
            key={index}
          />
        ))}
      </List>
    </>
  );
}

export default ListServices;
