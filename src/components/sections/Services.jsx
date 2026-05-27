
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Services.css';

const servicesData = [
  { id: 'coaching-ind', img: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400', colorKey: 'var(--green-main)', titleKey: 'Coaching Individual', desc: 'Ontológico y desarrollo personal. Acompañamos tu proceso de transformación con herramientas poderosas.' },
  { id: 'coaching-eje', img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400', colorKey: 'var(--green-main)', titleKey: 'Coaching Ejecutivo', desc: 'Potenciá tu liderazgo y el de tu equipo directivo con sesiones enfocadas en resultados.' },
  { id: 'coaching-org', img: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400', colorKey: 'var(--green-main)', titleKey: 'Coaching Organizacional', desc: 'Transformamos tu organización con enfoque en el desarrollo de talento y mejora continua.' },
  { id: 'ventas-mentoria', img: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400', colorKey: 'var(--red-main)', titleKey: 'Mentorías en Ventas', desc: 'Acompañamiento personalizado para mejorar tus procesos comerciales y cerrar más negocios.' },
  { id: 'ventas-capacitacion', img: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=400', colorKey: 'var(--red-main)', titleKey: 'Capacitaciones en Ventas', desc: 'Programas de formación práctica para equipos comerciales que buscan superar sus metas.' },
  { id: 'programas-integrales', img: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400', colorKey: 'var(--yellow-main)', titleKey: 'Programas Integrales', desc: 'Coaching + Ventas + desarrollo cultural. Un abordaje 360° para transformar tu organización de manera integral. ' }
];

const Services = ({ setView }) => {
  // Mantenemos t() solo para el título estático de la sección si lo llegas a necesitar traducir luego
  const { t } = useLanguage();

  return (
    <section id="servicios" className="services-section">
      <div className="container">
        <h2 className="section-title">Servicios que ofrecemos</h2>
        <div className="section-divider multi-color-divider"></div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <article key={service.id} className="service-card" style={{ borderTopColor: service.colorKey }}>
              <img 
                src={service.img} 
                alt={service.titleKey} 
                loading="lazy" 
                style={{cursor: 'pointer'}} 
                onClick={() => setView(service.id)} 
              />
              <div className="service-content">
                <h3 
                  style={{ color: service.colorKey, cursor: 'pointer' }} 
                  onClick={() => setView(service.id)}
                >
                  {service.titleKey}
                </h3>
                
                {/* SOLUCIÓN: Leemos 'desc' directamente del objeto 'service' */}
                <p>{service.desc}</p> 

                <button 
                  className="btn-more-info" 
                  style={{ backgroundColor: service.colorKey, border: 'none', cursor: 'pointer' }} 
                  onClick={() => setView(service.id)}
                >
                  Más información
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;