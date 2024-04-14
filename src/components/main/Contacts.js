import React from "react";
import ListContacts from "../ui/ListContacts";
import Maps from "../ui/Maps";
import Container from "./../ui/Container";

function Contacts() {
  return (
    <section className="contact reveal" id="contact">
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
