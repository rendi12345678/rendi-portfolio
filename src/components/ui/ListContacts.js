import React from "react";
import ContactCard from "./ContactCard";
import List from "./List";

const listContacts = [
  {
    title: "Location",
    text: "Jombang, East Java, Indonesia",
    link: "/",
  },
  {
    title: "Facebook",
    text: "Rendi Virgantara Setiawan",
    link: "/",
  },
  {
    title: "Instagram",
    text: "rendivs",
    link: "/",
  },
  {
    title: "Tiktok",
    text: "Rendi_V_S",
    link: "/",
  },
  {
    title: "Email",
    text: "hardleberg@gmail.com",
    link: "/",
  },
  {
    title: "Linkedin",
    text: "Rendi Virgantara Setiawan",
    link: "/",
  },
  {
    title: "X / Twitter",
    text: "Rendi Virgantara Setiawan",
    link: "/",
  },
];

function ListContacts() {
  return (
    <List className="list-contacts">
      {listContacts.map(({ title, text, link }, index) => (
        <ContactCard key={index} title={title} text={text} link={link} />
      ))}
    </List>
  );
}

export default ListContacts;
