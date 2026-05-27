
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './InfoSections.css';

const Results = () => {
  const { t } = useLanguage();

  return (
    <section className="info-section bg-black">
      <div className="container info-grid info-grid-reverse">
        <div className="info-text-container">
          <h2 className="info-title text-white">{t('results_title')}</h2>
          <div className="info-divider divider-red"></div>
          <p className="info-paragraph text-light-gray">
            {t('results_desc')}
          </p>
        </div>
        <div className="info-image-container">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Resultados y analíticas" 
            className="info-image rounded-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Results;