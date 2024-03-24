import React from "react";
import List from "./List";
import TestimonialCard from "./TestimonialCard";

const listTestimonials = [
  {
    imageUrl: "/images/rendi1.jpeg",
    name: "Larasati Ningsih",
    reviewText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident amet expedita? Velit perspiciatis, sequi distinctio iure obcaecati recusandae veritatis.",
  },
  {
    imageUrl: "/images/rendi1.jpeg",
    name: "Rendi Nurdiansyah",
    reviewText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident amet expedita? Velit perspiciatis, sequi distinctio iure obcaecati recusandae veritatis.",
  },
];

function ListTestimonials() {
  return (
    <List className="list-testimonials">
      {listTestimonials.map(({ imageUrl, name, reviewText }, index) => (
        <TestimonialCard
          imageUrl={imageUrl}
          name={name}
          reviewText={reviewText}
          key={index}
        />
      ))}
    </List>
  );
}

export default ListTestimonials;
