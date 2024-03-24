import React from "react";

function TestimonialCard({ imageUrl, name, reviewText }) {
  return (
    <li>
      <div className="review-text">" {reviewText} "</div>
      <figure className="client-profile">
        <img src={imageUrl} alt="Client" />
        <h5>{name}</h5>
      </figure>
    </li>
  );
}

export default TestimonialCard;
