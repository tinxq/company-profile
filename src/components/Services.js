import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="section" id="Services">
      <h2>Our Services</h2>
      <div className="services-content">
        <div className="service-item">
          <h3>Telecommunication Services</h3>
          <Link to="/services/telecom" className="read-more">See More</Link>
        </div>
        <div className="service-item">
          <h3>Cyber Security</h3>
          <Link to="/services/cyber-security" className="read-more">See More</Link>
        </div>
        <div className="service-item">
          <h3>ICT Management</h3>
          <Link to="/services/ict" className="read-more">See More</Link>
        </div>
        <div className="service-item">
          <h3>System Integration</h3>
          <Link to="/services/system-integration" className="read-more">See More</Link>
        </div>
        <div className="service-item">
          <h3>ELV Systems</h3>
          <Link to="/services/elv" className="read-more">See More</Link>
        </div>
      </div>
    </section>
  );
}
