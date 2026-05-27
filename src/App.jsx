import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Importance from './components/sections/Importance';
import Results from './components/sections/Results';
import ContactForm from './components/sections/ContactForm';
import AboutUs from './components/pages/AboutUs'; 
import ServiceDetail from './components/pages/ServiceDetail';
import Footer from './components/layout/Footer';
import WhatsAppFab from './components/layout/WhatsAppFab';

function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  // Evaluamos si la vista actual pertenece a un detalle de servicio
  const isServiceView = ['coaching-ind', 'coaching-eje', 'coaching-org', 'ventas-mentoria', 'ventas-capacitacion', 'programas-integrales'].includes(view);

  return (
    <main>
      <Navbar setView={setView} currentView={view} />
      
      {view === 'home' && (
        <>
          <Hero />
          {/* Le pasamos setView a Services para que los botones funcionen */}
          <Services setView={setView} />
          <Importance />
          <Results />
          <ContactForm />
        </>
      )}

      {view === 'nosotros' && <AboutUs />}

      {isServiceView && <ServiceDetail serviceId={view} setView={setView} />}
      
      <Footer setView={setView} />
      <WhatsAppFab />
    </main>
  );
}

export default App;