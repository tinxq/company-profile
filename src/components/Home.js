import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Header from './Header';
import Navbar from './Navbar';
import About from './About';
import Vision from './Vision';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import Customers from './OurCustomers';

import AllServices from './AllServices';
import TelecomServices from '../services/TelecomServices';
import CyberSecurity from '../services/CyberSecurity';
import ICTManagement from '../services/ICTManagement';
import SystemIntegration from '../services/SystemIntegration';
import ELVSystems from '../services/ELVSystems';
import FiberOptical from '../services/FiberOptical';

function MainLayout() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

function ServicesLayout() {
  return (
    <div className="services-page">
      <Outlet />
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <About />
      <Vision />
      <Services />
      <Customers />
      <Contact />
    </>
  );
}

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        
        <Route path="/all-services" element={<ServicesLayout />}>
          <Route index element={<AllServices />} />
        </Route>
        <Route path="/services/telecom" element={<ServicesLayout />}>
          <Route index element={<TelecomServices />} />
        </Route>
        <Route path="/services/cyber-security" element={<ServicesLayout />}>
          <Route index element={<CyberSecurity />} />
        </Route>
        <Route path="/services/ict" element={<ServicesLayout />}>
          <Route index element={<ICTManagement />} />
        </Route>
        <Route path="/services/system-integration" element={<ServicesLayout />}>
          <Route index element={<SystemIntegration />} />
        </Route>
        <Route path="/services/elv" element={<ServicesLayout />}>
          <Route index element={<ELVSystems />} />
        </Route>
        <Route path="/services/fiber-optical" element={<ServicesLayout />}>
          <Route index element={<FiberOptical />} />
        </Route>
        
        <Route path="*" element={<div>non found</div>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;