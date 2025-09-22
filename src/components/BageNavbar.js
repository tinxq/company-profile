import { useState } from "react";

function BageNavbar({ selectedService, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    "Telecom",
    "Cyber",
    "ICT",
    "Integration",
    "ELV",
    "Fiber",
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bage-navbar">
      <div className="navbar-header">
        <div className="brand">All Services</div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        {services.map((service) => (
          <li key={service} className="nav-item">
            <span
              className={`nav-link ${selectedService === service ? "active" : ""}`}
              onClick={() => {
                onSelect(service);
                setIsOpen(false); 
              }}
              style={{ cursor: "pointer" }}
            >
              {service}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BageNavbar;