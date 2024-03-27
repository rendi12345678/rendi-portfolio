import React from "react";

function TestimonialCard({ imageUrl, name, reviewText }) {
  return (
    <li>
      <figure className="client-profile">
        <img src={imageUrl} alt="Client" />
        <h5>{name}</h5>
      </figure>
      <p className="review-text">" {reviewText} "</p>
    </li>
  );
}

export default TestimonialCard;
