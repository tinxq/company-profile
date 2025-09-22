import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Vision from './components/Vision';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

import AllServices from './components/AllServices';
import TelecomServices from './services/TelecomServices';
import CyberSecurity from './services/CyberSecurity';
import ICTManagement from './services/ICTManagement';
import SystemIntegration from './services/SystemIntegration';
import ELVSystems from './services/ELVSystems';
import FiberOptical from './services/FiberOptical';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Navbar />
              <Header />
              <About />
              <Vision />
              <Services />
              <Contact />
              <Footer />
            </div>
          }
        />

                 <Route path="/all-services" element={<AllServices />} />
        <Route path="/services/telecom" element={<TelecomServices />} />
        <Route path="/services/cyber-security" element={<CyberSecurity />} />
        <Route path="/services/ict" element={<ICTManagement />} />
        <Route path="/services/system-integration" element={<SystemIntegration />} />
        <Route path="/services/elv" element={<ELVSystems />} />
        <Route path="/services/fiber-optical" element={<FiberOptical />} />
      </Routes>
    </Router>
  );
}

export default App;
