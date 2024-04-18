import React from "react";
import useNavbarContext from "../../hooks/useNavbarContext";
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
  const { navbarRef } = useNavbarContext();

  return (
    <header>
      <Container>
        <h3 className="navbar-title reveal">Rendi's Portfolio</h3>
        <nav ref={navbarRef}>
          <NavList>
            {linkItems.map(({ to, text }, index) => (
              <LinkItem to={to} text={text} key={index} delay={index} />
            ))}
          </NavList>
        </nav>
        <HamburgerMenu />
      </Container>
    </header>
  );
}

export default Navbar;
