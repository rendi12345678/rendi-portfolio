import React from "react";
import List from "./List";
import ServiceCard from "./ServiceCard";

const listServices = [
  {
    title: "Custom Website",
    description:
      "Crafting customized websites from scratch to meet each client's unique needs, ensuring a personalized online presence",
  },
  {
    title: "Responsive Website",
    description:
      "Creating seamless cross-device experiences with responsive design, utilizing fluid layouts, flexible grids, and media queries for a modern user experience",
  },
  {
    title: "Website Optimization",
    description:
      "Improving website speed and efficiency through optimization techniques, enhancing user satisfaction",
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
