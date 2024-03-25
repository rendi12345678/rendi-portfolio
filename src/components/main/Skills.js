import React from "react";
import "../../assets/styles/skills.css";
import Container from "../ui/Container";
import ListSkills from "../ui/ListSkills";
import Title from "../ui/Title";

function Skills() {
  return (
    <section className="skills" id="skills">
      <Container>
        <Title title="My skills" description="My technical level" />
        <ListSkills />
      </Container>
    </section>
  );
}

export default Skills;