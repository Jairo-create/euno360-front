
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Importance from './components/sections/Importance';
import Results from './components/sections/Results';
import ContactForm from './components/sections/ContactForm';
import AboutUs from './components/pages/AboutUs'; 
import ServiceDetail from './components/pages/ServiceDetail';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsConditions from './components/pages/TermsConditions';
import Footer from './components/layout/Footer';
import WhatsAppFab from './components/layout/WhatsAppFab';

function App() {
  // 1. Leemos si hay una vista guardada en la URL al cargar la página
  const getInitialView = () => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  };

  // 2. Estado interno (usamos setViewState para diferenciarlo de la función pública)
  const [view, setViewState] = useState(getInitialView());

  // 3. Función inteligente que actualiza la vista Y el historial del navegador
  const setView = useCallback((newView) => {
    if (newView === view) return; // Evita guardar historiales duplicados
    setViewState(newView);
    // Empuja la nueva ruta al historial del navegador
    window.history.pushState({ view: newView }, '', `#${newView}`);
  }, [view]);

  // 4. Escuchar los botones "Atrás" y "Adelante" del navegador
  useEffect(() => {
    // Registramos la primera página al entrar para que funcione el primer "Atrás"
    if (!window.history.state) {
      window.history.replaceState({ view: view }, '', `#${view}`);
    }

    // Esta función se dispara cuando el usuario toca "Atrás" o "Adelante"
    const handlePopState = (event) => {
      if (event.state && event.state.view) {
        setViewState(event.state.view); // Usamos setViewState directo para no crear un bucle
      } else {
        // Fallback por si la URL fue manipulada manualmente
        const hash = window.location.hash.replace('#', '');
        setViewState(hash || 'home');
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [view]);

  // 5. Scroll suave al cambiar de vista
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  // Evaluamos si la vista actual pertenece a un detalle de servicio
  const isServiceView = [
    'coaching-ind', 'coaching-eje', 'coaching-org', 
    'ventas-mentoria', 'ventas-capacitacion', 
    'mkt-identidad', 'mkt-ecosistema', 'mkt-comunidades', 'mkt-ads', 'mkt-consultoria',
    'programas-integrales'
  ].includes(view);

  return (
    <main>
      <Navbar setView={setView} currentView={view} />
      
      {view === 'home' && (
        <>
          <Hero setView={setView} />
          <Services setView={setView} />
          <Importance />
          <Results />
          <ContactForm setView={setView} />
        </>
      )}

      {view === 'nosotros' && <AboutUs />}
      {view === 'privacidad' && <PrivacyPolicy />}
      {view === 'terminos' && <TermsConditions />}

      {isServiceView && <ServiceDetail serviceId={view} setView={setView} />}
      
      <Footer setView={setView} />
      <WhatsAppFab />
    </main>
  );
}

export default App;