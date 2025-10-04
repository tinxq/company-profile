import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BageNavbar({ selectedService, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    "Telecom",
    "Cyber",
    "ICT",
    "Integration",
    "ELV",
    "Fiber",
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSelect = (service) => {
    if (service === "Home") {
      navigate("/");
    } else {
      onSelect(service);
    }
    setIsOpen(false);
  };

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
        <li key="Home" className="nav-item">
          <span
            className={`nav-link ${selectedService === "Home" ? "active" : ""}`}
            onClick={() => handleSelect("Home")}
            style={{ cursor: "pointer" }}
          >
            Home
          </span>
        </li>
        {services.map((service) => (
          <li key={service} className="nav-item">
            <span
              className={`nav-link ${selectedService === service ? "active" : ""}`}
              onClick={() => handleSelect(service)}
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