
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
// Importa tus imágenes de cabecera si las sigues usando (puedes agregar las de mkt luego)
import individual from '../../assets/individual1.png';
import ejecutivo from '../../assets/ejecutivo.png';
import organizacional from '../../assets/organizacional.png';
import mentoria from '../../assets/mentoria.png';
import ventas from '../../assets/ventas.png';
import identidad from '../../assets/identidad.png';
import gestion from '../../assets/gestion.png';
import ecosistema from '../../assets/ecosistema.png';
import demanda from '../../assets/demanda.png';
import consultoria from '../../assets/consultoria.png';
import integral from '../../assets/integral.png';
import './ServiceDetail.css';

const ServiceDetail = ({ serviceId, setView }) => {
  const { t } = useLanguage();

  const servicesContent = {
    // --- COACHING ---
    'coaching-ind': {
      title: t('serv_ind_title'), subtitle: t('serv_ind_subtitle'), tagline: t('serv_ind_tagline'),
      color: "var(--green-main)", headerImg: individual,
      img: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800",
      servicios: [t('serv_ind_item1'), t('serv_ind_item2'), t('serv_ind_item3'), t('serv_ind_item4'), t('serv_ind_item5'), t('serv_ind_item6')],
      diferenciales: [t('serv_ind_dif1'), t('serv_ind_dif2'), t('serv_ind_dif3')]
    },
    'coaching-eje': {
      title: t('serv_eje_title'), subtitle: t('serv_eje_subtitle'), tagline: t('serv_eje_tagline'),
      color: "var(--green-main)", headerImg: ejecutivo,
      img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      servicios: [t('serv_eje_item1'), t('serv_eje_item2'), t('serv_eje_item3'), t('serv_eje_item4'), t('serv_eje_item5'), t('serv_eje_item6')],
      diferenciales: [t('serv_eje_dif1'), t('serv_eje_dif2'), t('serv_eje_dif3')]
    },
    'coaching-org': {
      title: t('serv_org_title'), subtitle: t('serv_org_subtitle'), tagline: t('serv_org_tagline'),
      color: "var(--green-main)", headerImg: organizacional,
      img: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800",
      servicios: [t('serv_org_item1'), t('serv_org_item2'), t('serv_org_item3'), t('serv_org_item4'), t('serv_org_item5'), t('serv_org_item6')],
      diferenciales: [t('serv_org_dif1'), t('serv_org_dif2'), t('serv_org_dif3')]
    },

    // --- VENTAS ---
    'ventas-mentoria': {
      title: t('serv_mentoria_title'), subtitle: t('serv_mentoria_subtitle'), tagline: t('serv_mentoria_tagline'),
      color: "var(--red-main)", headerImg: mentoria,
      img: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
      servicios: [t('serv_mentoria_item1'), t('serv_mentoria_item2'), t('serv_mentoria_item3'), t('serv_mentoria_item4'), t('serv_mentoria_item5'), t('serv_mentoria_item6')],
      diferenciales: [t('serv_mentoria_dif1'), t('serv_mentoria_dif2'), t('serv_mentoria_dif3')]
    },
    'ventas-capacitacion': {
      title: t('serv_cap_title'), subtitle: t('serv_cap_subtitle'), tagline: t('serv_cap_tagline'),
      color: "var(--red-main)", headerImg: ventas,
      img: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=800",
      servicios: [t('serv_cap_item1'), t('serv_cap_item2'), t('serv_cap_item3'), t('serv_cap_item4'), t('serv_cap_item5'), t('serv_cap_item6'), t('serv_cap_item7')],
      diferenciales: [t('serv_cap_dif1'), t('serv_cap_dif2'), t('serv_cap_dif3'), t('serv_cap_dif4')]
    },

    // --- MARKETING (Ajustados para usar la variable 'servicios') ---
    'mkt-identidad': {
      title: t('serv_mkt1_title'), subtitle: t('serv_mkt1_subtitle'), tagline: t('serv_mkt1_tagline'), desc: t('serv_mkt1_desc'),
      color: 'var(--yellow-main)', headerImg: identidad, // Puedes poner una imagen local aquí luego
      img: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1280',
      servicios: [t('serv_mkt1_item1'), t('serv_mkt1_item2'), t('serv_mkt1_item3'), t('serv_mkt1_item4')]
    },
    'mkt-ecosistema': {
      title: t('serv_mkt2_title'), subtitle: t('serv_mkt2_subtitle'), tagline: t('serv_mkt2_tagline'), desc: t('serv_mkt2_desc'),
      color: 'var(--yellow-main)', headerImg: gestion,
      img: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1280',
      servicios: [t('serv_mkt2_item1'), t('serv_mkt2_item2'), t('serv_mkt2_item3')]
    },
    'mkt-comunidades': {
      title: t('serv_mkt3_title'), subtitle: t('serv_mkt3_subtitle'), tagline: t('serv_mkt3_tagline'), desc: t('serv_mkt3_desc'),
      color: 'var(--yellow-main)', headerImg: ecosistema,
      img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1280',
      servicios: [t('serv_mkt3_item1'), t('serv_mkt3_item2'), t('serv_mkt3_item3')]
    },
    'mkt-ads': {
      title: t('serv_mkt4_title'), subtitle: t('serv_mkt4_subtitle'), tagline: t('serv_mkt4_tagline'), desc: t('serv_mkt4_desc'),
      color: 'var(--yellow-main)', headerImg: demanda,
      img: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1280',
      servicios: [t('serv_mkt4_item1'), t('serv_mkt4_item2'), t('serv_mkt4_item3'), t('serv_mkt4_item4')]
    },
    'mkt-consultoria': {
      title: t('serv_mkt5_title'), subtitle: t('serv_mkt5_subtitle'), tagline: t('serv_mkt5_tagline'), desc: t('serv_mkt5_desc'),
      color: 'var(--yellow-main)', headerImg: consultoria,
      img: 'https://images.pexels.com/photos/3182741/pexels-photo-3182741.jpeg?auto=compress&cs=tinysrgb&w=1280',
      servicios: [t('serv_mkt5_item1'), t('serv_mkt5_item2'), t('serv_mkt5_item3'), t('serv_mkt5_item4')]
    },

    // --- PROGRAMAS INTEGRALES 360° ---
    'programas-integrales': {
      title: 'Programas Integrales 360°', 
      subtitle: 'Transformación Organizacional', 
      tagline: 'Para organizaciones que buscan un cambio profundo alineando liderazgo, ventas y posicionamiento.', 
      
      isIntegral: true, // ¡CLAVE PARA EL CSS!
      headerImg: integral,
      img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1280',
      servicios: [
        'Programas de transformación cultural.',
        'Alineación entre liderazgo, equipo y estrategia comercial.',
        'Integración de gestión emocional en ventas.',
        'Desarrollo de cultura centrada en el cliente. ',
        'Seguimiento+ medición de impacto.'
      ],
      diferenciales: [
        'Abordaje holístico y simultáneo de los tres ejes del éxito corporativo.',
        'Mediciones precisas de clima, conversión de ventas y efectividad operativa.',
        'Resultados transformacionales que impactan en la cultura, el equipo y la rentabilidad.'
      ]
    }
  };

  const data = servicesContent[serviceId];

  if (!data) return <div style={{padding: '100px', textAlign: 'center'}}>{t('service_not_found')}</div>;

  return (
    <div className="service-detail-page">
      <header className="service-detail-header">
        {/* Cabecera con imagen (si la tiene) */}
        {data.headerImg ? (
          <img src={data.headerImg} alt={`Fondo ${data.title}`} className="service-header-bg" />
        ) : (
          <div className="service-header-bg-solid" style={{ backgroundColor: '#1A1A1A', position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}></div>
        )}
        
        {/* MAGIA SENIOR: Si es integral, usa gradiente 360 en el overlay, si no, usa el color normal */}
        <div 
          className="service-header-overlay" 
          style={data.isIntegral 
            ? { background: 'linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(46,125,50,0.5) 50%, rgba(212,175,55,0.4) 100%)' }
            : { background: `linear-gradient(135deg, rgba(26,26,26,0.92) 0%, ${data.color}40 100%)` }
          }
        >
          <div className="container">
            {/* Si es integral, oculta el badge sólido, si no, lo muestra */}
            {!data.isIntegral && (
              <span className="service-badge" style={{ backgroundColor: data.color }}>{data.subtitle}</span>
            )}
            
            {/* Título normal o Título con Gradiente */}
            <h1 className={data.isIntegral ? 'text-gradient-360' : ''}>{data.title}</h1>
            <p className="service-tagline">{data.tagline}</p>
          </div>
        </div>
      </header>

      <div className="container service-detail-grid">
        <div className="service-info-left">
          
          {/* Nuevo bloque para la descripción de Marketing y 360 */}
          {data.desc && (
            <section className="detail-section margin-bottom-md">
              <p className="service-desc-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333333' }}>
                {data.desc}
              </p>
            </section>
          )}

          <section className="detail-section">
            <h2>{t('what_includes')}</h2>
            <div 
              className={`detail-divider ${data.isIntegral ? 'bg-gradient-360' : ''}`} 
              style={!data.isIntegral ? { backgroundColor: data.color } : {}}
            ></div>
            
            <ul className="detail-list">
              {data.servicios.map((item, idx) => (
                <li key={idx}>
                  <span 
                    className="bullet" 
                    style={!data.isIntegral ? { color: data.color } : { color: 'var(--green-main)' }}
                  >✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {data.diferenciales && (
            <section className="detail-section margin-top-md">
              <h2>{t('our_differential')}</h2>
              <div className="detail-divider" style={{ backgroundColor: data.color }}></div>
              <ul className="detail-list spec-list">
                {data.diferenciales.map((item, idx) => (
                  <li key={idx} style={{ borderLeftColor: data.color }}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className="service-info-right">
          <div className="sticky-sidebar">
            <img src={data.img} alt={data.title} className="sidebar-image" />
            <div className="cta-box">
              <h3>{t('cta_ready_title')}</h3>
              <p>{t('cta_ready_desc')}</p>
              
              {/* Botón CTA normal o Botón CTA con Gradiente */}
              <button 
                onClick={(e) => { 
                  e.preventDefault(); 
                  setView('home'); 
                  setTimeout(() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'}), 100); 
                }}
                className={`btn-cta ${data.isIntegral ? 'btn-gradient-360' : ''}`} 
                style={!data.isIntegral ? { 
                  backgroundColor: data.color, 
                  border: 'none', cursor: 'pointer', width: '100%', fontFamily: 'inherit', fontSize: '1rem' 
                } : {
                  border: 'none', cursor: 'pointer', width: '100%', fontFamily: 'inherit', fontSize: '1rem' 
                }}
              >
              {t('btn_contact')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;