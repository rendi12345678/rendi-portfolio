import React from "react";
import "../../assets/styles/portfolio.css";
import Container from "../ui/Container";
import Title from "../ui/Title";
import ListPortfolio from "./../ui/ListPortfolio";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <Container>
        <Title title="My Portfolio" description="My projects" />
        <ListPortfolio />
      </Container>
    </section>
  );
}

export default Portfolio;
