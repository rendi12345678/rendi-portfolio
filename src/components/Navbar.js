import React, { useRef, useState, useEffect } from "react";
import "../styles/reset.css";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleLinkClick = () => {
    setIsChecked(false);
  };

  return (
    <header id="navbar">
      <div className="nav-container">
        <h2>
          Rendi's <span>Portfolio</span>
        </h2>
        <nav>
          <ul className={isChecked ? "slide" : ""}>
            <li>
              <HashLink smooth to="/#hero-section" onClick={handleLinkClick}>
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about-section" onClick={handleLinkClick}>
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#project-section" onClick={handleLinkClick}>
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact-section" onClick={handleLinkClick}>
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
        <div className="menu-toggle">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
