
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import individual from '../../assets/individual1.png';
import ejecutivo from '../../assets/ejecutivo.png';
import organizacional from '../../assets/organizacional.png';
import mentoria from '../../assets/mentoria.png';
import ventas from '../../assets/ventas.png';
import integral from '../../assets/integral.png';
import './ServiceDetail.css';

const ServiceDetail = ({ serviceId, setView }) => {
  const { t } = useLanguage();

 
  const servicesContent = {
    'coaching-ind': {
      title: t('serv_ind_title'),
      subtitle: t('serv_ind_subtitle'),
      tagline: t('serv_ind_tagline'),
      color: "var(--green-main)",
      headerImg: individual,
      img: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800",
      servicios: [
        t('serv_ind_item1'), t('serv_ind_item2'), t('serv_ind_item3'),
        t('serv_ind_item4'), t('serv_ind_item5'), t('serv_ind_item6')
      ],
      diferenciales: [
        t('serv_ind_dif1'), t('serv_ind_dif2'), t('serv_ind_dif3')
      ]
    },
    'coaching-eje': {
      title: t('serv_eje_title'),
      subtitle: t('serv_eje_subtitle'),
      tagline: t('serv_eje_tagline'),
      color: "var(--green-main)",
      headerImg: ejecutivo,
      img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      servicios: [
        t('serv_eje_item1'), t('serv_eje_item2'), t('serv_eje_item3'),
        t('serv_eje_item4'), t('serv_eje_item5'), t('serv_eje_item6')
      ],
      diferenciales: [
        t('serv_eje_dif1'), t('serv_eje_dif2'), t('serv_eje_dif3')
      ]
    },
    'coaching-org': {
      title: t('serv_org_title'),
      subtitle: t('serv_org_subtitle'),
      tagline: t('serv_org_tagline'),
      color: "var(--green-main)",
      headerImg: organizacional,
      img: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800",
      servicios: [
        t('serv_org_item1'), t('serv_org_item2'), t('serv_org_item3'),
        t('serv_org_item4'), t('serv_org_item5'), t('serv_org_item6')
      ],
      diferenciales: [
        t('serv_org_dif1'), t('serv_org_dif2'), t('serv_org_dif3')
      ]
    },
    'ventas-mentoria': {
      title: t('serv_mentoria_title'),
      subtitle: t('serv_mentoria_subtitle'),
      tagline: t('serv_mentoria_tagline'),
      color: "var(--red-main)",
      headerImg: mentoria,
      img: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
      servicios: [
        t('serv_mentoria_item1'), t('serv_mentoria_item2'), t('serv_mentoria_item3'),
        t('serv_mentoria_item4'), t('serv_mentoria_item5'), t('serv_mentoria_item6')
      ],
      diferenciales: [
        t('serv_mentoria_dif1'), t('serv_mentoria_dif2'), t('serv_mentoria_dif3')
      ]
    },
    'ventas-capacitacion': {
      title: t('serv_cap_title'),
      subtitle: t('serv_cap_subtitle'),
      tagline: t('serv_cap_tagline'),
      color: "var(--red-main)",
      headerImg: ventas,
      img: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=800",
      servicios: [
        t('serv_cap_item1'), t('serv_cap_item2'), t('serv_cap_item3'),
        t('serv_cap_item4'), t('serv_cap_item5'), t('serv_cap_item6'), t('serv_cap_item7')
      ],
      diferenciales: [
        t('serv_cap_dif1'), t('serv_cap_dif2'), t('serv_cap_dif3'), t('serv_cap_dif4')
      ]
    },
    'programas-integrales': {
      title: t('serv_int_title'),
      subtitle: t('serv_int_subtitle'),
      tagline: t('serv_int_tagline'),
      color: "var(--yellow-main)",
      headerImg: integral,
      img: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      servicios: [
        t('serv_int_item1'), t('serv_int_item2'), t('serv_int_item3'),
        t('serv_int_item4'), t('serv_int_item5')
      ],
      diferenciales: [
        t('serv_int_dif1'), t('serv_int_dif2')
      ]
    }
  };

  const data = servicesContent[serviceId];

  if (!data) return <div style={{padding: '100px', textAlign: 'center'}}>{t('service_not_found')}</div>;

  return (
    <div className="service-detail-page">
      <header className="service-detail-header">
        {data.headerImg && (
          <img src={data.headerImg} alt={`Fondo ${data.title}`} className="service-header-bg" />
        )}
        
        <div 
          className="service-header-overlay" 
          style={{ background: `linear-gradient(135deg, rgba(26,26,26,0.92) 0%, ${data.color}40 100%)` }}
        >
          <div className="container">
            <span className="service-badge" style={{ backgroundColor: data.color }}>{data.subtitle}</span>
            <h1>{data.title}</h1>
            <p className="service-tagline">{data.tagline}</p>
          </div>
        </div>
      </header>

      <div className="container service-detail-grid">
        <div className="service-info-left">
          <section className="detail-section">
            <h2>{t('what_includes')}</h2>
            <div className="detail-divider" style={{ backgroundColor: data.color }}></div>
            <ul className="detail-list">
              {data.servicios.map((item, idx) => (
                <li key={idx}>
                  <span className="bullet" style={{ color: data.color }}>✓</span>
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
             <button 
             onClick={(e) => { 
               e.preventDefault(); 
               setView('home'); 
               setTimeout(() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'}), 100); 
             }}
             className="btn-cta" 
             style={{ 
               backgroundColor: data.color, 
               border: 'none', 
               cursor: 'pointer', 
               width: '100%', 
               fontFamily: 'inherit', 
               fontSize: '1rem' 
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