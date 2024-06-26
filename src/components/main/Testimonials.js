import React from "react";
import Container from "../ui/Container";
import ListTestimonials from "../ui/ListTestimonials";
import Title from "../ui/Title";

function Testimonials() {
  return (
    <section className="testimonials reveal" id="testimonials">
      <Container>
        <Title
          title="Testimonials"
          description="What people say"
          className="reveal"
        />
        <ListTestimonials />
      </Container>
    </section>
  );
}

export default Testimonials;
