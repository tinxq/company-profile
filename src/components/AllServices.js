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
      case "Telecom":
        return <TelecomServices />;
      case "Cyber":
        return <CyberSecurity />;
      case "ICT":
        return <ICTManagement />;
      case "Integration":
        return <SystemIntegration />;
      case "ELV":
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
