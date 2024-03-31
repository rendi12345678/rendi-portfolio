import React from "react";
import ContactCard from "./ContactCard";
import List from "./List";
import Title from "./Title";

const listContacts = [
  {
    type: "location",
    icon: "/images/location.svg",
    text: "Prayungan, Gondang Manis, Bandar Kedung Mulyo, Jombang, East Java, Indonesia",
  },
  {
    type: "email",
    icon: "/images/mail.svg",
    text: "hardleberg@gmail.com",
  },
  {
    type: "phone-number",
    icon: "/images/telephone.svg",
    text: "+62 857-3330-0369",
  },
  {
    type: "linkedin",
    url: "https://linkedin.com/in/rendi-virgantara-setiawan-ab24382a9",
    icon: "/images/linkedin.svg",
    text: "Rendi Virgantara Setiawan",
  },
];

function ListContacts() {
  return (
    <div className="info">
      <Title
        title="Contact Me"
        description="Let's call me now"
        className="reveal"
      />
      <List className="list-contacts">
        {listContacts.map(({ icon, text, url, type }, index) => (
          <ContactCard
            key={index}
            icon={icon}
            text={text}
            delay={index}
            url={url}
            type={type}
          />
        ))}
      </List>
    </div>
  );
}

export default ListContacts;
