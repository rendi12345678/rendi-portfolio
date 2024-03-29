import React from "react";
import List from "./List";
import TestimonialCard from "./TestimonialCard";

const listTestimonials = [
  {
    imageUrl: "/images/rendi1.jpeg",
    name: "Rendi Nurdiansyah",
    reviewText: "The website is awesome, and it is really cool.",
  },
  {
    imageUrl: "/images/rendi1.jpeg",
    name: "Larasati Ningsih",
    reviewText:
      "The website has a great appearance, it's neat, and clean. Everything is well-organized and easy to navigate.",
  },
  {
    imageUrl: "/images/rendi1.jpeg",
    name: "Imam Nurkholis",
    reviewText:
      "The website looks great, even better than most others out there",
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
          delay={index}
        />
      ))}
    </List>
  );
}

export default ListTestimonials;
