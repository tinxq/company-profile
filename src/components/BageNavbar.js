import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function BageNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bage-navbar">
      <div className="navbar-container">

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services/telecom" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Telecom Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services/cyber-security" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Cyber Security
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services/ict" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              ICT Management
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services/system-integration" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              System Integration
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services/elv" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              ELV Systems
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default BageNavbar;