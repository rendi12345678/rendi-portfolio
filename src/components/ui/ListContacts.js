import React from "react";
import ContactCard from "./ContactCard";
import List from "./List";
import Title from "./Title";

const listContacts = [
  {
    icon: "/images/location.svg",
    text: "Prayungan, Gondang Manis, Bandar Kedung Mulyo, Jombang, East Java, Indonesia",
  },
  {
    icon: "/images/mail.svg",
    text: "hardleberg@gmail.com, Indonesia",
  },
  {
    icon: "/images/telephone.svg",
    text: "+62 857-3330-0369",
  },
  {
    icon: "/images/instagram.svg",
    text: "rendivs",
  },
];

function ListContacts() {
  return (
    <div className="info">
      <Title title="Contact Me" description="Let's call me now" />
      <List className="list-contacts">
        {listContacts.map(({ icon, text }, index) => (
          <ContactCard key={index} icon={icon} text={text} />
        ))}
      </List>
    </div>
  );
}

export default ListContacts;
