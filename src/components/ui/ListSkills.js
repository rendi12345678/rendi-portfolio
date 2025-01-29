import React from "react";
import List from "./List";
import SkillCard from "./SkillCard";

const listSkills = [
  {
    text: "Next.js",
  },
  {
    text: "TypeScript",
  },
  {
    text: "Rust",
  },
  {
    text: "Tailwind",
  },
  {
    text: "MUI",
  },
  {
    text: "MongoDB",
  },
  {
    text: "MySQL",
  },
  {
    text: "Docker",
  },
];

function ListSkills() {
  return (
    <List>
      {listSkills.map(({ text }, index) => (
        <SkillCard text={text} key={index} delay={index} />
      ))}
    </List>
  );
}

export default ListSkills;
