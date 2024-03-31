import React from "react";
import "../../assets/styles/services.css";
import Container from "../ui/Container";
import ListServices from "../ui/ListServices";
import Title from "../ui/Title";

function Services() {
  return (
    <section className="services reveal" id="services">
      <Container>
        <Title
          title="My Services"
          description="What i offer"
          className="reveal"
        />
        <ListServices />
      </Container>
    </section>
  );
}

export default Services;
