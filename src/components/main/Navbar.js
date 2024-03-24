import React from "react";
import "../../assets/styles/navbar.css";
import useButtons from "../../hooks/useButtons";
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
  const { PrimaryButton } = useButtons();

  return (
    <header>
      <h3>Rendi's Portfolio</h3>
      <NavList>
        {linkItems.map(({ to, text }, index) => (
          <LinkItem to={to} text={text} key={index} />
        ))}
      </NavList>
      <PrimaryButton type="button" text="Contact Me" color="blue" />
    </header>
  );
}

export default Navbar;
