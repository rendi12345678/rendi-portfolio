import React from "react";
import HamburgerMenu from "../ui/HamburgerMenu";
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
  // {
  //   to: "/#testimonials",
  //   text: "Testimonials",
  // },
  {
    to: "/#contact",
    text: "Contact",
  },
];

function Navbar() {
  return (
    <header>
      <Container>
        <nav className="reveal">
          <h3 className="reveal">Rendi's Portfolio</h3>
          <HamburgerMenu />
          <NavList>
            {linkItems.map(({ to, text }, index) => (
              <LinkItem to={to} text={text} key={index} delay={index} />
            ))}
          </NavList>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
