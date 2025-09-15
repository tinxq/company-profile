// BageNavbar.js
function BageNavbar({ selectedService, onSelect }) {
  const services = [
    "Telecom Services",
    "Cyber Security",
    "ICT Management",
    "System Integration",
    "ELV Systems",
  ];

  return (
    <nav className="bage-navbar">
      <ul className="nav-menu">
        {services.map((service) => (
          <li key={service} className="nav-item">
            <span
              className={`nav-link ${selectedService === service ? "active" : ""}`}
              onClick={() => onSelect(service)}
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
