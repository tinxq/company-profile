import React from 'react';

const FiberOptical = () => {
  return (
    <div className="fiber-page-container">
      <div className="fiber-card">
        <h1 className="fiber-title">Fiber Optical Services</h1>

        {/* FTTO Section */}
        <div className="fiber-section">
          <div className="fiber-section-header">FTTO (Fiber to the Office)</div>
          <div className="fiber-section-content">
            <ul className="fiber-section-list">
              <li>Fiber Optic connectivity into the office</li>
              <li>End-to-end passive fiber infrastructure</li>
              <li>High capacities – future proof</li>
              <li>Flexibility and easy to expand</li>
              <li>Compatible with all standard end-user devices</li>
              <li>PoLAN integration</li>
            </ul>
          </div>
        </div>
        <hr className="fiber-divider" />

        {/* Customers Section */}
        <div className="fiber-section">
          <div className="fiber-section-header">Typical FTTO Customers</div>
          <div className="fiber-section-content1">
            <ul className="fiber-section-list">
              <li>Hospitals (connection of patient rooms)</li>
              <li>Finance Banks</li>
              <li>Insurances</li>
              <li>Municipalities</li>
              <li>Utilities</li>
              <li>Police</li>
              <li>Universities</li>
              <li>Listed Buildings</li>
            </ul>
            <div className="fiber-imges">
            <div className="fiber-image2">
              <img src="/imgs/img20.jpg" alt="FTTO customers illustration" />
            </div>
               <div className="fiber-image2">
              <img src="/imgs/img22.png" alt="FTTO illustration" />
            </div>
            </div>
            
          </div>
        </div>
  
        <hr className="fiber-divider" />

        {/* Installation Switch Section */}
        <div className="fiber-section">
          <div className="fiber-section-header">Installation Switch - Software Features</div>
          <div className="fiber-section-content1">

            <ul className="fiber-section-list">
              <li>Integrated Management Agent</li>
              <li>Firmware Update</li>
              <li>Device Manager (TFTP upload)</li>
              <li>
                Supported Protocols:
                <ul className='fiber-sublist'>
                  <li>Telnet</li>
                  <li>SNMP/Traps</li>
                  <li>Syslog</li>
                  <li>Device Manager (GUI software)</li>
                  <li>Web based (optional)</li>
                </ul>
              </li>
              <li>IEEE 802.1x transparent (authentication)</li>
              <li>RADIUS Authentication (optional)</li>
            </ul>
                <div className="fiber-image2">
            <img src="/imgs/img21.png" alt="Installation switch illustration" />
            </div>
        </div>
          </div>
      
        <hr className="fiber-divider" />

        {/* FTTH Section */}
        <div className="fiber-section">
          <div className="fiber-section-header">FTTH Network</div>
          <div className="fiber-section-content1">
            <ul className="fiber-section-list">
              <li>Special for FTTH applications</li>
              <li>Mounting on DIN-rail</li>
            </ul>
            <div className="fiber-image2">
              <img src="/imgs/img23.jpeg" alt="FTTH illustration" />
            </div>
          </div>
        </div>

        <div className="fiber-footer-text">
          Upgrade your business with our advanced Fiber Optical Services. Contact us today for details.
        </div>
      </div>
    </div>
  );
};

export default FiberOptical;