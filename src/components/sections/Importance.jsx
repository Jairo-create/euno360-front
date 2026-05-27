
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './InfoSections.css';

const Importance = () => {
  const { t } = useLanguage();

  return (
    <section className="info-section bg-white">
      <div className="container info-grid">
        <div className="info-image-container">
          <img 
            src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Equipo colaborando" 
            className="info-image rounded-shadow"
          />
        </div>
        <div className="info-text-container">
          <h2 className="info-title text-dark">{t('importance_title')}</h2>
          <div className="info-divider divider-green"></div>
          <p className="info-paragraph text-gray">
            {t('importance_desc')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Importance;