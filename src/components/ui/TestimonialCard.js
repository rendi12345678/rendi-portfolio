import React, { useRef } from "react";
import useDelay from "../../hooks/useDelay";

function TestimonialCard({ imageUrl, name, reviewText, delay }) {
  const liRef = useRef(null);
  useDelay({ delay, ref: liRef });

  return (
    <li ref={liRef} className="reveal">
      <figure className="client-profile">
        <img src={imageUrl} alt="Client" />
        <h5>{name}</h5>
      </figure>
      <p className="review-text">" {reviewText} "</p>
    </li>
  );
}

export default TestimonialCard;
