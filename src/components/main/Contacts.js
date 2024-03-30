import React from "react";
import "../../assets/styles/contacts.css";
import useAppContext from "../../hooks/useAppContext";
import ListContacts from "../ui/ListContacts";
import Maps from "../ui/Maps";
import Container from "./../ui/Container";

function Contacts() {
  const { contactRef } = useAppContext();

  return (
    <section className="contact" id="contact" ref={contactRef}>
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
