import React from "react";
import List from "./List";
import ServiceCard from "./ServiceCard";

const listServices = [
  {
    title: "Custom Web Solutions",
    description:
      "Providing tailored web solutions, including e-commerce platforms, inventory management systems, and other custom applications to meet unique business needs.",
  },
  {
    title: "Website Maintenance",
    description:
      "Ensuring websites remain up-to-date, functional, and optimized with ongoing maintenance and support services.",
  },
  {
    title: "Web Security Services",
    description:
      "Implementing robust security measures to protect websites from vulnerabilities, ensuring data integrity and safety.",
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
