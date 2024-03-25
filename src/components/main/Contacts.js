import React from "react";
import "../../assets/styles/contacts.css";
import ListContacts from "../ui/ListContacts";
import Maps from "../ui/Maps";
import Container from "./../ui/Container";

function Contacts() {
  return (
    <section className="contact" id="contact">
      <Container>
        <div className="list-contact-and-maps">
          <ListContacts />
          <Maps />
        </div>
      </Container>
    </section>
  );
}

export default Contacts;
