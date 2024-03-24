import React from "react";
import "../../assets/styles/contacts.css";
import ListContacts from "../ui/ListContacts";
import Title from "../ui/Title";
import Container from "./../ui/Container";

function Contacts() {
  return (
    <section className="contact" id="contact">
      <Container>
        <Title title="Contact Me" description="Let's contact me" />
        <div className="list-contact-and-maps">
          <ListContacts />
          <div className="maps"></div>
        </div>
      </Container>
    </section>
  );
}

export default Contacts;
