import React from "react";
import useNavbarContext from "../../hooks/useNavbarContext";

function HamburgerMenu() {
  const { navbarRef } = useNavbarContext();

  const toggleNav = () => {
    navbarRef.current.classList.toggle("active");

    console.log(`Clicked`);
  };

  return (
    <div className="hamburger-menu" onClick={toggleNav}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default HamburgerMenu;
