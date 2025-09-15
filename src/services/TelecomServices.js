
export default function TelecomServices() {
  return (
    <>
    <div className="telecom-page-container">
  
      <div className="telecom-card">
        <h1 className="telecom-title">Telecommunication Services</h1>

        {/* Telecom Operator Services */}
        <div className="telecom-section">
          <div className="telecom-section-header">Telecom Operator Services</div>
          <ul className="telecom-section-list">
            <li>Wireless Access Networks</li>
            <li>Fixed Access Networks</li>
            <li>Core Networks</li>
            <li>Transport Networks</li>
            <li>In Building Solution</li>
          </ul>
        </div>

        {/* Installations GSM */}
        <div className="telecom-section">
          <div className="telecom-section-header">Installations GSM</div>
          <ul className="telecom-section-list">
            <li>Junpir</li>
            <li>Power</li>
            <li>Feeder</li>
            <li>Microwave link</li>
          </ul>
        </div>

        {/* Power */}
        <div className="telecom-section">
          <div className="telecom-section-header">Power</div>
          <ul className="telecom-section-list">
            <li>Rectifier</li>
            <li>BBU</li>
            <li>DCDU</li>
            <li>RTN</li>
          </ul>
        </div>

        {/* Fiber & RF */}
        <div className="telecom-section">
          <div className="telecom-section-header">Fiber & RF</div>
          <ul className="telecom-section-list">
            <li>BBU</li>
            <li>DCDU</li>
            <li>RTN</li>
          </ul>
        </div>

        <div className="telecom-footer-text">FIX ALARM CONFIG</div>
      </div>
    </div></>
  );
}
