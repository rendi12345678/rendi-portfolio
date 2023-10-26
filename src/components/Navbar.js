import React, {useRef, useState, useEffect} from 'react';
import '../styles/reset.css';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
const navRef = useRef();
const [isChecked, setIsChecked] = useState(false);

const navToggle = value => {
  const currentClassName = navRef.current.className;
  navRef.current.className = `{currentClassName} ${value}`;
}
  
const handleCheckboxChange = e => {
  setIsChecked(e.target.checked); 
  if(e.target.checked) return navToggle('slide');
  return navToggle('');
}

const handleLinkClick = () => {
  setIsChecked(false); 
  navToggle('');
}
  
return (
<header id="navbar">
  <div class="nav-container">
  <h2>Rendi's <span>Portfolio</span></h2>
  <nav>
    <ul ref={navRef}>
      <li>
      <HashLink smooth to="/#hero-section" onClick={handleLinkClick}>Home</HashLink>
      </li>
      <li>
      <HashLink smooth to="/#about-section" onClick={handleLinkClick}>About</HashLink>
      </li>
      <li>
      <HashLink smooth to="/#project-section" onClick={handleLinkClick}>Projects</HashLink>
      </li>
      <li>
      <HashLink smooth to="/#contact-section" onClick={handleLinkClick}>Contact</HashLink>
      </li>
    </ul>
  </nav>
  <div class="menu-toggle">
      <input type="checkbox" 
             checked={isChecked}
             onChange={handleCheckboxChange}/>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</header>
);
}

export default Navbar;