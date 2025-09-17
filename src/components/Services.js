import { useNavigate } from "react-router-dom";

export default function ServicesButton() {
  const navigate = useNavigate(); 

  const goToAllServices = () => {
    navigate("/all-services");
  };

  return (
    <section className="section" id="Services">
      <h2>Our Services</h2>
      <div className="services-cards">
        <div className="service-card">Telecom Services</div>
        <div className="service-card">Cyber Security</div>
        <div className="service-card">ICT Management</div>
        <div className="service-card">System Integration</div>
        <div className="service-card">ELV Systems</div>
      </div>
      <div className="services-button">
        <button onClick={goToAllServices}> viwe all services </button>
      </div>
    </section>
  );
}