import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About Us</a></li>
        <li><a href="#vision" onClick={() => setIsOpen(false)}>Vision</a></li>
        <li><a href="#Services" onClick={() => setIsOpen(false)}>Services</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;