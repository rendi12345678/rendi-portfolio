import React from "react";
import useNavbar from "../../hooks/useNavbar";

function HamburgerMenu() {
  const { toggleNav, hamburgerMenuRef } = useNavbar();

  return (
    <div className="hamburger-menu" ref={hamburgerMenuRef} onClick={toggleNav}>
      <span ref={hamburgerMenuRef}></span>
      <span ref={hamburgerMenuRef}></span>
      <span ref={hamburgerMenuRef}></span>
    </div>
  );
}

export default HamburgerMenu;
