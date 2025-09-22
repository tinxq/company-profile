import React from "react";

const SystemIntegration = () => {
  return (
    <div className="system-page-container">
      <div className="system-card">
        <h1 className="system-title">As Systems Integrators</h1>

        <div className="system-section">
          <div className="system-section-header">Integration Overview</div>
          <div className="system-section-content">
            <p className="system-section-text">
              Our experience in different technologies and systems engineering
              gives us the confidence to act as qualified systems integrators.
              We specialize in bringing together component subsystems into a
              cohesive whole, ensuring they function seamlessly and solve
              automation challenges. Once you choose us as a systems integrator,
              the first step in the integration process is to assess the
              business’s needs and define the requirements for the transformation
              project.
              With this foundation established, our team then develops and executes
              an integration plan. After implementation, they continue to test and
              improve the system, and Creative Labs provides excellent maintenance
              and after-sale services as well.
            </p>
          </div>
        </div>

        {/* الصورة جوه الكارد */}
        <img 
          src="/imgs/img24.jpg" 
          alt="System integration illustration" 
          className="system-card-image"
        />

        <div className="system-footer-text">
          Contact us to learn how our systems integration services can help
          your business. Visit our website or reach out to our team for more
          information.
        </div>
      </div>
    </div>
  );
};

export default SystemIntegration;
