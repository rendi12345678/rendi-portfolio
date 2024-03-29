import React from "react";
import List from "./List";
import SkillCard from "./SkillCard";

const listSkills = [
  {
    text: "HTML",
  },
  {
    text: "CSS",
  },
  {
    text: "Javascript",
  },
  {
    text: "Node Js",
  },
  {
    text: "Express Js",
  },
  {
    text: "React Js",
  },
  {
    text: "Mongo Db",
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
