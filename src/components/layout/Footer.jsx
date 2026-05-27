
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import logoEuno from '../../assets/logo-euno.png'; 
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        
        {/* Columna 1: Identidad con Imagen de Logo */}
        <div className="footer-brand">
          <div className="footer-logo-container">
            <a href="#" onClick={scrollToTop} className="footer-logo-link" aria-label="Volver al inicio">
              <img src={logoEuno} alt="Euno 360 Logo Footer" className="footer-logo-img" />
            </a>
          </div>
          <p className="footer-tagline">Coaching &amp; Consultoría</p>
        </div>

        {/* Columna 2: Contacto */}
        <div className="footer-contact">
          <address className="contact-info">
            <p className="contact-item">
              <span className="icon">📞</span> +54 11 0000-0000
            </p>
            <p className="contact-item">
              <span className="icon">✉️</span> contacto@euno360.com
            </p>
          </address>
        </div>

        {/* Columna 3: Redes Sociales */}
      <div className="footer-social-legal">
          <div className="social-icons">
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* WhatsApp */}
            {/* WhatsApp (Nativo Line-Art perfecto) */}
              <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Nube de chat */}
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            {/* Teléfono interno (dibujado como línea de un solo trazo) */}
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </a>
          </div> 
          <div className="footer-legal-links">
            <a href="#privacy" className="privacy-link">Política de Privacidad</a>
          </div>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Euno 360. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;