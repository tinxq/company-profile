// AllServices.js
import { useState } from "react";
import BageNavbar from "./BageNavbar";
import TelecomServices from "../services/TelecomServices";
import CyberSecurity from "../services/CyberSecurity";
import ICTManagement from "../services/ICTManagement";
import SystemIntegration from "../services/SystemIntegration";
import ELVSystems from "../services/ELVSystems";

export default function AllServices() {
  const [selectedService, setSelectedService] = useState("Telecom Services"); // افتراضي

  const renderService = () => {
    switch (selectedService) {
      case "Telecom Services":
        return <TelecomServices />;
      case "Cyber Security":
        return <CyberSecurity />;
      case "ICT Management":
        return <ICTManagement />;
      case "System Integration":
        return <SystemIntegration />;
      case "ELV Systems":
        return <ELVSystems />;
      default:
        return <TelecomServices />;
    }
  };

  return (
    <>
      <BageNavbar 
        selectedService={selectedService} 
        onSelect={setSelectedService} 
      />
      <div className="service-container">{renderService()}</div>
    </>
  );
}
