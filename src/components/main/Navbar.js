import React from "react";
import "../../assets/styles/navbar.css";
import useButtons from "../../hooks/useButtons";
import LinkItem from "../ui/LinkItem";
import NavList from "../ui/NavList";
import Container from "./../ui/Container";

const linkItems = [
  {
    to: "/#hero",
    text: "Home",
  },
  {
    to: "/#about",
    text: "About",
  },
  {
    to: "/#services",
    text: "Services",
  },
  {
    to: "/#skills",
    text: "Skills",
  },
  {
    to: "/#portfolio",
    text: "Portfolio",
  },
  {
    to: "/#testimonials",
    text: "Testimonials",
  },
  {
    to: "/#contact",
    text: "Contact",
  },
];

function Navbar() {
  const { PrimaryButton } = useButtons();

  return (
    <header>
      <Container>
        <h3>Rendi's Portfolio</h3>
        <NavList>
          {linkItems.map(({ to, text }, index) => (
            <LinkItem to={to} text={text} key={index} />
          ))}
        </NavList>
      </Container>
    </header>
  );
}

export default Navbar;
