
import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import logoEuno from '../../assets/logo-euno.png';
import './AboutUs.css';

const AboutUs = () => {
  const { t } = useLanguage();
  
  // Estado para controlar qué valor está abierto en la vista móvil
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    // Si tocas el que ya está abierto, lo cierra. Si tocas otro, lo abre.
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const valoresData = [
    { title: t('val_honestidad'), desc: t('val_honestidad_desc'), color: "var(--green-main)" },
    { title: t('val_transparencia'), desc: t('val_transparencia_desc'), color: "var(--red-main)" },
    { title: t('val_alegria'), desc: t('val_alegria_desc'), color: "var(--yellow-main)" },
    { title: t('val_pasion'), desc: t('val_pasion_desc'), color: "var(--red-main)" },
    { title: t('val_posibilidad'), desc: t('val_posibilidad_desc'), color: "var(--green-main)" },
    { title: t('val_equipo'), desc: t('val_equipo_desc'), color: "var(--yellow-main)" },
    { title: t('val_prosperidad'), desc: t('val_prosperidad_desc'), color: "var(--green-main)" },
    { title: t('val_conciencia'), desc: t('val_conciencia_desc'), color: "var(--red-main)" },
    { title: t('val_resultados'), desc: t('val_resultados_desc'), color: "var(--yellow-main)" }
  ];

  return (
    <div className="about-page">
      {/* Encabezado */}
      <header className="about-header">
        <div className="container">
          <img src={logoEuno} alt="Euno 360" className="about-logo" />
          <p>{t('about_subtitle')}</p>
        </div>
      </header>

      {/* Misión y Visión */}
      <section className="about-mv-section container">
        <div className="mv-block">
          <div className="mv-text">
            <h2>{t('mision_title')}</h2>
            <div className="section-divider divider-left bg-green"></div>
            <p>{t('mision_desc')}</p>
          </div>
          <div className="mv-image">
            <img src="https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Misión Euno 360" />
          </div>
        </div>

        <div className="mv-block reverse">
          <div className="mv-text">
            <h2>{t('vision_title')}</h2>
            <div className="section-divider divider-left bg-red"></div>
            <p>{t('vision_desc')}</p>
          </div>
          <div className="mv-image">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Visión Euno 360" />
          </div>
        </div>
      </section>

      {/* Sección Valores (Con Acordeón Híbrido) */}
      <section className="about-valores bg-gray-light">
        <div className="container">
          <h2 className="valores-main-title">{t('valores_title')}</h2>
          <div className="section-divider multi-color-divider"></div>
          
          <div className="valores-grid">
            {valoresData.map((val, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`valor-card ${isOpen ? 'open' : ''}`} 
                  style={{ borderLeftColor: val.color }}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="valor-card-header">
                    <h3 style={{ color: val.color }}>{val.title}</h3>
                    <span className="valor-icon" style={{ color: val.color }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                  <div className="valor-card-body">
                    <p>{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;