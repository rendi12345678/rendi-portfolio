import React from "react";
import List from "./List";
import ServiceCard from "./ServiceCard";

function ListServices() {
  return (
    <>
      <List className="list-services">
        <ServiceCard
          title="Web Design"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nobis
      alias in fugit."
        />
        <ServiceCard
          title="Clean Code"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nobis
      alias in fugit."
        />
        <ServiceCard
          title="Debugging"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nobis
      alias in fugit."
        />
      </List>
    </>
  );
}

export default ListServices;
