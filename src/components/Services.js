import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ServicesButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="section" id="Services">
      <h2>Our Services</h2>
      <div className="services-button">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          View All Services
        </button>

        {isOpen && (
          <div className="dropdown-cards">
            <Link to="/services/telecom" className="service-card">
              Telecom Services
            </Link>
            <Link to="/services/cyber-security" className="service-card">
              Cyber Security
            </Link>
            <Link to="/services/ict" className="service-card">
              ICT Management
            </Link>
            <Link to="/services/system-integration" className="service-card">
              System Integration
            </Link>
            <Link to="/services/elv" className="service-card">
              ELV Systems
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}