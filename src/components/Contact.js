import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Get In Touch</h2>

      <p>
        <FaPhone style={{ marginRight: "8px", color: "#333" }} />
        <FaWhatsapp style={{ marginRight: "8px", color: "green" }} />
        <strong>Phone:</strong> 0576716123
      </p>

      <p>
        <FaPhone style={{ marginRight: "8px", color: "#333" }} />
        <FaWhatsapp style={{ marginRight: "8px", color: "green" }} />
        <strong>Phone:</strong> 0541653306
      </p>

      <p>
        <FaPhone style={{ marginRight: "8px", color: "#333" }} />
        <FaWhatsapp style={{ marginRight: "8px", color: "green" }} />
        <strong>Phone:</strong> 0502275061
      </p>

      <p>
        <FaEnvelope style={{ marginRight: "8px", color: "#0073e6" }} />
        <strong>Email:</strong> Info@daralkhebra.it.com
      </p>

      <p>
        <FaMapMarkerAlt style={{ marginRight: "8px", color: "red" }} />
        <strong>Address:</strong> Buraydah Al Qassim, Saudi Arabia
      </p>
    </section>
  );
}

export default Contact;
