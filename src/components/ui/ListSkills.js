import React from "react";
import List from "./List";
import SkillCard from "./SkillCard";

function ListSkills() {
  return (
    <List>
      <SkillCard text="HTML" />
      <SkillCard text="CSS" />
      <SkillCard text="Javascript" />
      <SkillCard text="Node js" />
      <SkillCard text="Express Js" />
      <SkillCard text="React Js" />
      <SkillCard text="Mongo Db" />
    </List>
  );
}

export default ListSkills;
