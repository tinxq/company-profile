import React from 'react';

export default function TelecomServices() {
  return (
    <div className="telecom-page-container">
      <div className="telecom-card">
        <h1 className="telecom-title">Telecommunication Services</h1>

        <div className="telecom-section">
          <div className="telecom-section-header">Telecom Operator Services</div>
          <ul className="telecom-section-list">
            <li>
              <strong>Wireless Access Networks</strong>
              <p>Our Wireless Access Networks enable seamless wireless communication using advanced technologies like 4G, 5G, and Wi-Fi. These networks connect user devices to the core network, providing high-speed internet and voice services through base stations and access points.</p>
              <img src="/imgs/img1.jpg" alt="Wireless Access Networks illustration" />
            </li>
            <li>
              <strong>Fixed Access Networks</strong>
              <p>Our Fixed Access Networks deliver reliable, high-speed connectivity through fiber-optic, DSL, or coaxial cables. These wired solutions ensure stable broadband internet, IPTV, and telephony services for homes and businesses.</p>
              <img src="/imgs/img2.jpg" alt="Fixed Access Networks illustration" />
            </li>
            <li>
              <strong>Core Networks</strong>
              <p>The Core Network serves as the backbone of our telecom infrastructure, managing routing, switching, and data processing. It ensures efficient data transfer and service delivery across wireless and fixed networks.</p>
              <img src="/imgs/img3.jpg" alt="Core Networks illustration" />
            </li>
            <li>
              <strong>Transport Networks</strong>
              <p>Our Transport Networks facilitate high-capacity, long-distance data transmission using optical fiber, microwave, or satellite systems. They connect core networks, data centers, and access points for reliable communication.</p>
              <img src="/imgs/img4.jpg" alt="Transport Networks illustration" />
            </li>
            <li>
              <strong>In-Building Solutions</strong>
              <p>Our In-Building Solutions (IBS) enhance wireless coverage within buildings using Distributed Antenna Systems (DAS) and small cells. These solutions ensure strong signals in offices, malls, and other enclosed spaces.</p>
              <img src="/imgs/img6.jpg" alt="In Building Solution illustration" />
            </li>
            <li>
              <strong>Specialized Telecom Services</strong>
              <p>We offer value-added services such as IoT connectivity, network monitoring, and cloud-based communication solutions to enhance your telecom experience and meet diverse business needs.</p>
              <img src="/imgs/img5.png" alt="Additional telecom service illustration" />
            </li>
          </ul>
        </div>

        <div className="telecom-section">
          <div className="telecom-section-header">Installations</div>
          <ul className="telecom-section-list">
            <li>
              <strong>Microwave Link</strong>
              <p>Our Microwave Link installations provide high-speed, point-to-point wireless communication for remote sites or backhaul traffic. They offer a cost-effective solution for areas where cabling is impractical.</p>
              <img src="/imgs/img7.png" alt="Microwave link illustration" />
            </li>
            <li>
              <strong>Point-to-Point</strong>
              <p>Our Point-to-Point installations deliver dedicated, low-latency connections using microwave, fiber, or laser systems. These links are ideal for secure, high-speed data transfer between two locations.</p>
              <img src="/imgs/img8.png" alt="Point to point installation illustration" />
            </li>
          </ul>
        </div>

        <div className="telecom-footer-text">
          Contact us to learn how our cutting-edge telecom solutions can empower your business. Visit our website or reach out to our team for more information.
        </div>
      </div>
    </div>
  );
}