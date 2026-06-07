
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Services.css';

const servicesData = [
  // --- COACHING (VERDE) ---
  { id: 'coaching-ind', img: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400', colorKey: 'var(--green-main)', titleKey: 'Coaching Individual', desc: 'Ontológico y desarrollo personal. Acompañamos tu proceso de transformación con herramientas poderosas.' },
  { id: 'coaching-eje', img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400', colorKey: 'var(--green-main)', titleKey: 'Coaching Ejecutivo', desc: 'Potenciá tu liderazgo y el de tu equipo directivo con sesiones enfocadas en resultados.' },
  { id: 'coaching-org', img: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400', colorKey: 'var(--green-main)', titleKey: 'Coaching Organizacional', desc: 'Transformamos tu organización con enfoque en el desarrollo de talento y mejora continua.' },
  
  // --- VENTAS (ROJO) ---
  { id: 'ventas-mentoria', img: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400', colorKey: 'var(--red-main)', titleKey: 'Mentorías en Ventas', desc: 'Acompañamiento personalizado para mejorar tus procesos comerciales y cerrar más negocios.' },
  { id: 'ventas-capacitacion', img: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=400', colorKey: 'var(--red-main)', titleKey: 'Capacitaciones en Ventas', desc: 'Programas de formación práctica para equipos comerciales que buscan superar sus metas.' },
  
  // --- MARKETING (AMARILLO) ---
  { 
    id: 'mkt-identidad', 
    img: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400', 
    colorKey: 'var(--yellow-main)', 
    titleKey: 'Identidad Estratégica, Visual y Protección de Marca', 
    desc: 'Para negocios que necesitan definir su propósito, profesionalizar su imagen visual y blindar su marca legalmente desde el primer día.' 
  },
  { 
    id: 'mkt-ecosistema', 
    img: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400', 
    colorKey: 'var(--yellow-main)', 
    titleKey: 'Ecosistema Digital y Conversión (Web & SEO)', 
    desc: 'Automatiza tu atracción de clientes y transforma tu web en una herramienta de venta activa las 24 horas.' 
  },
  { 
    id: 'mkt-comunidades', 
    img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400', 
    colorKey: 'var(--yellow-main)', 
    titleKey: 'Gestión de Comunidades y Autoridad', 
    desc: 'Construye una comunidad fiel, aumenta tu credibilidad en el mercado y genera un flujo constante de prospectos calificados.' 
  },
  { 
    id: 'mkt-ads', 
    img: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400', 
    colorKey: 'var(--yellow-main)', 
    titleKey: 'Generación de Demanda y Tráfico Pago', 
    desc: 'Acelera tus ventas a corto plazo e inyecta tráfico calificado de manera inmediata a tu embudo comercial.' 
  },
  { 
    id: 'mkt-consultoria', 
    img: 'https://images.pexels.com/photos/3182741/pexels-photo-3182741.jpeg?auto=compress&cs=tinysrgb&w=400', 
    colorKey: 'var(--yellow-main)', 
    titleKey: 'Consultoría de Estrategia y Crecimiento', 
    desc: 'Un plan maestro para alinear la mentalidad del líder, ordenar al equipo y escalar la facturación.' 
  },

  // --- PROGRAMAS INTEGRALES 360° (GRADIENTE) ---
  { 
    id: 'programas-integrales', 
    img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400', 
    isIntegral: true, /* Esta bandera activará la magia CSS */
    titleKey: 'Programas Integrales 360°', 
    desc: 'Coaching + Ventas + Marketing. Un abordaje 360° para transformar tu organización de manera integral y escalar resultados.' 
  }
];

const Services = ({ setView }) => {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="services-section">
      <div className="container">
        <h2 className="section-title">Servicios que ofrecemos</h2>
        <div className="section-divider multi-color-divider"></div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <article 
              key={service.id} 
              /* Si es integral, le pone la clase especial. Si no, usa el color normal */
              className={`service-card ${service.isIntegral ? 'card-integral' : ''}`} 
              style={!service.isIntegral ? { borderTopColor: service.colorKey } : {}}
            >
              <img 
                src={service.img} 
                alt={service.titleKey} 
                loading="lazy" 
                style={{cursor: 'pointer'}} 
                onClick={() => setView(service.id)} 
              />
              <div className="service-content">
                <h3 
                  className={service.isIntegral ? 'text-gradient-360' : ''}
                  style={!service.isIntegral ? { color: service.colorKey, cursor: 'pointer' } : { cursor: 'pointer' }} 
                  onClick={() => setView(service.id)}
                >
                  {service.titleKey}
                </h3>
                
                <p>{service.desc}</p> 

                <button 
                  className={`btn-more-info ${service.isIntegral ? 'btn-gradient-360' : ''}`} 
                  style={!service.isIntegral ? { backgroundColor: service.colorKey, border: 'none', cursor: 'pointer' } : { border: 'none', cursor: 'pointer' }} 
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