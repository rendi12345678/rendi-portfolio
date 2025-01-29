import React from "react";
import ContactCard from "./ContactCard";
import List from "./List";
import Title from "./Title";

const listContacts = [
  {
    type: "email",
    icon: "/images/mail.svg",
    text: "rendivirgantarasetiawan123@gmail.com",
  },
  {
    type: "github",
    url: "https://github.com/rendi12345678",
    icon: "/images/github.svg",
    text: "https://github.com/rendi12345678",
  },
  {
    type: "linkedin",
    url: "https://linkedin.com/in/rendi-virgantara-setiawan-ab24382a9",
    icon: "/images/linkedin.svg",
    text: "https://linkedin.com/in/rendi-virgantara-setiawan-ab24382a9",
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
