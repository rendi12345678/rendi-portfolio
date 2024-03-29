import React from "react";
import List from "./List";
import ServiceCard from "./ServiceCard";

const listServices = [
  {
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nobis alias in fugit",
  },
  {
    title: "Maintenance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nobis alias in fugit",
  },
  {
    title: "Debugging",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nobis alias in fugit",
  },
];

function ListServices() {
  return (
    <>
      <List className="list-services">
        {listServices.map(({ title, description }, index) => (
          <ServiceCard
            title={title}
            description={description}
            delay={index}
            key={index}
          />
        ))}
      </List>
    </>
  );
}

export default ListServices;
