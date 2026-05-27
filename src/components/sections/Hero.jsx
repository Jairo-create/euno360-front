import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import heroImg2 from '../../assets/hero2.png'; // <-- REVISA QUE EL NOMBRE Y EXTENSIÓN COINCIDAN
import './Hero.css';

const Hero = ({ setView }) => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Arreglo con la información de cada "Slide"
  const slides = [
    {
      id: 0,
      img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1280",
      title: t('hero_title'),
      subtitle: t('hero_subtitle'),
      btnText: t('hero_cta'),
      btnClass: "btn-green", // Botón verde clásico
      action: () => setTimeout(() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'}), 100)
    },
    {
      id: 1,
      img: heroImg2,
      title: t('hero_title2'),
      subtitle: t('hero_subtitle2'),
      btnText: t('hero_cta2'),
      btnClass: "btn-yellow", // Nuevo botón amarillo
      action: () => {
        setView('programas-integrales'); // Nos lleva a la página 360
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  ];

  // Efecto automático: Cambia de foto cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 9000);
    return () => clearInterval(interval); // Limpieza de memoria
  }, [slides.length, currentSlide]);

  return (
    <header className="hero-section">
      
      {/* Iteramos sobre las fotos */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img 
            className="hero-bg"
            src={slide.img} 
            alt={`Euno 360 Slide ${index + 1}`}
            loading={index === 0 ? "eager" : "lazy"} 
          />
          
          <div className="hero-overlay">
            <div className="container hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              
              <button 
                onClick={slide.action} 
                className={`btn-primary hero-btn ${slide.btnClass}`}
              >
                {slide.btnText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Barra promocional fija al fondo (no rota) */}
      <div className="promo-bar">
        <p>{t('promo_bar')}</p>
      </div>

      {/* Puntos de control (Navegación manual) */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </header>
  );
};

export default Hero;