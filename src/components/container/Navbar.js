import React from "react";
import "../../assets/styles/navbar.css";
import LinkItem from "../ui/LinkItem";
import NavList from "../ui/NavList";

const linkItems = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/",
    text: "About",
  },
  {
    to: "/",
    text: "Services",
  },
  {
    to: "/",
    text: "Skills",
  },
  {
    to: "/",
    text: "Projects",
  },
  {
    to: "/",
    text: "Testimonials",
  },
  {
    to: "/",
    text: "Contact",
  },
];

function Navbar() {
  return (
    <header>
      <h3>Rendi's Portfolio</h3>
      <NavList>
        {linkItems.map(({ to, text }, index) => (
          <LinkItem to={to} text={text} key={index} />
        ))}
      </NavList>
    </header>
  );
}

export default Navbar;
