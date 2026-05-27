
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <header className="hero-section">
     
      <img 
        className="hero-bg"
        src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1280" 
        alt="Equipo de trabajo en consultoría Euno 360"
        loading="lazy" 
      />
      
      <div className="hero-overlay">
        <div className="container hero-content">
          <h1>{t('hero_title')}</h1>
          <p>{t('hero_subtitle')}</p>
          <a href="#contacto" className="btn-primary hero-btn">
            {t('hero_cta')}
          </a>
        </div>
      </div>

      <div className="promo-bar">
        <p>{t('promo_bar')}</p>
      </div>
    </header>
  );
};

export default Hero;