
import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import logoEuno from '../../assets/logo-euno.png'; 
import './Navbar.css';

const Navbar = ({ setView, currentView }) => {
  // 1. Contexto de idiomas completo
  const { t, lang, setLang } = useLanguage();
  
  // 2. Todos los estados necesarios declarados correctamente
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Cierra el menú móvil si estaba abierto
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        
        {/* Logo de la empresa */}
        <div className="logo-container">
          <a href="#" onClick={handleLogoClick} className="logo-link" aria-label="Volver al inicio">
            <img src={logoEuno} alt="Euno 360 Logo" className="logo" />
          </a>
        </div>

        {/* --- MENÚ DESKTOP (Unificado con la clase .nav-link) --- */}
        <div className="desktop-menu">
          <button 
            onClick={() => setView('nosotros')} 
            className={`nav-link ${currentView === 'nosotros' ? 'active-page' : ''}`}
          >
            Nosotros
          </button>
          
          <div className="dropdown">
            <button 
    onClick={(e) => { 
      e.preventDefault(); 
      setView('home'); 
      setTimeout(() => document.getElementById('servicios')?.scrollIntoView({behavior: 'smooth'}), 100); 
    }} 
    className={`nav-link ${['coaching-ind', 'coaching-eje', 'coaching-org', 'ventas-mentoria', 'ventas-capacitacion', 'programas-integrales'].includes(currentView) ? 'active-page' : ''}`}
  >
    Servicios
  </button>
            <div className="dropdown-menu">
              <div className="dropdown-section">
                <span className="dropdown-title title-green">COACHING</span>
                <a href="#" onClick={(e) => { e.preventDefault(); setView('coaching-ind'); }}>Coaching Individual</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setView('coaching-eje'); }}>Coaching Ejecutivo</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setView('coaching-org'); }}>Coaching Organizacional</a>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-section">
                <span className="dropdown-title title-red">VENTAS</span>
                <a href="#" onClick={(e) => { e.preventDefault(); setView('ventas-mentoria'); }}>Mentoría en Ventas</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setView('ventas-capacitacion'); }}>Capacitaciones en Ventas</a>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-section">
                <span className="dropdown-title title-yellow">PROGRAMAS INTEGRALES</span>
                <a href="#" onClick={(e) => { e.preventDefault(); setView('programas-integrales'); }}>Coaching + Ventas + Cultura</a>
              </div>
            </div>
          </div>

          <a href="#contacto" onClick={(e) => { e.preventDefault(); setView('home'); setTimeout(() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="nav-link">
            Contacto
          </a>
          
          {/* Selector de idiomas con imágenes SVGs */}
          <div className="lang-switcher">
            <img 
              src="https://flagcdn.com/ar.svg" 
              alt="Español" 
              className={`flag-icon ${lang === 'es' ? 'active' : ''}`} 
              onClick={() => setLang('es')} 
              title="Español"
            />
            <img 
              src="https://flagcdn.com/gb.svg" 
              alt="English" 
              className={`flag-icon ${lang === 'en' ? 'active' : ''}`} 
              onClick={() => setLang('en')} 
              title="English"
            />
            <img 
              src="https://flagcdn.com/br.svg" 
              alt="Português" 
              className={`flag-icon ${lang === 'pt' ? 'active' : ''}`} 
              onClick={() => setLang('pt')} 
              title="Português"
            />
          </div>
        </div>

        {/* Botón menú hamburguesa móvil */}
        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>
      </div>

      {/* --- MENÚ MÓVIL COMPLETAMENTE INTEGRADO --- */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
           <button 
             className="mobile-main-link" 
             style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', fontFamily: 'inherit', cursor: 'pointer' }}
             onClick={() => { setView('nosotros'); setIsMobileMenuOpen(false); }}
           >
             Nosotros
           </button>
           
           {/* Acordeón de Servicios Móvil */}
           <div className="mobile-accordion">
             <div 
               className="mobile-accordion-header mobile-main-link" 
               onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
             >
               <span>Servicios</span>
               <span className={`chevron ${isMobileServicesOpen ? 'open' : ''}`}>▼</span>
             </div>
             
             <div className={`mobile-accordion-wrapper ${isMobileServicesOpen ? 'expanded' : ''}`}>
               <div className="mobile-accordion-content">
                 <div className="mobile-dropdown-inner">
                   <div className="mobile-dropdown-section">
                     <span className="mobile-dropdown-title title-green">COACHING</span>
                     <a href="#" onClick={(e) => { e.preventDefault(); setView('coaching-ind'); setIsMobileMenuOpen(false); }}>Coaching Individual</a>
                     <a href="#" onClick={(e) => { e.preventDefault(); setView('coaching-eje'); setIsMobileMenuOpen(false); }}>Coaching Ejecutivo</a>
                     <a href="#" onClick={(e) => { e.preventDefault(); setView('coaching-org'); setIsMobileMenuOpen(false); }}>Coaching Organizacional</a>
                   </div>
                   <div className="mobile-dropdown-section">
                     <span className="mobile-dropdown-title title-red">VENTAS</span>
                     <a href="#" onClick={(e) => { e.preventDefault(); setView('ventas-mentoria'); setIsMobileMenuOpen(false); }}>Mentoría en Ventas</a>
                     <a href="#" onClick={(e) => { e.preventDefault(); setView('ventas-capacitacion'); setIsMobileMenuOpen(false); }}>Capacitaciones en Ventas</a>
                   </div>
                   <div className="mobile-dropdown-section">
                     <span className="mobile-dropdown-title title-yellow">PROGRAMAS INTEGRALES</span>
                     <a href="#" onClick={(e) => { e.preventDefault(); setView('programas-integrales'); setIsMobileMenuOpen(false); }}>Coaching + Ventas + Cultura</a>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           <a href="#contacto" className="mobile-main-link" onClick={(e) => { e.preventDefault(); setView('home'); setIsMobileMenuOpen(false); setTimeout(() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'}), 100); }}>
             Contacto
           </a>
           
           {/* Selector de idiomas móvil */}
           <div className="mobile-lang-switcher">
            <img 
              src="https://flagcdn.com/ar.svg" 
              alt="Español" 
              className={`flag-icon ${lang === 'es' ? 'active' : ''}`} 
              onClick={() => { setLang('es'); setIsMobileMenuOpen(false); }} 
            />
            <img 
              src="https://flagcdn.com/gb.svg" 
              alt="English" 
              className={`flag-icon ${lang === 'en' ? 'active' : ''}`} 
              onClick={() => { setLang('en'); setIsMobileMenuOpen(false); }} 
            />
            <img 
              src="https://flagcdn.com/br.svg" 
              alt="Português" 
              className={`flag-icon ${lang === 'pt' ? 'active' : ''}`} 
              onClick={() => { setLang('pt'); setIsMobileMenuOpen(false); }} 
            />
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;