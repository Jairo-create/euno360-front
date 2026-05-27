import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import heroImg2 from '../../assets/hero2.png';
import './Hero.css';

const Hero = ({ setView }) => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- ESTADOS PARA CONTROLAR EL SWIPE EN MÓVILES ---
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Distancia mínima en píxeles para considerar que fue un "deslizamiento" y no un simple toque
  const minSwipeDistance = 50; 

  const slides = [
    {
      id: 0,
      img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1280",
      title: t('hero_title'),
      subtitle: t('hero_subtitle'),
      btnText: t('hero_cta'),
      btnClass: "btn-green",
      action: () => setTimeout(() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'}), 100)
    },
    {
      id: 1,
      img: heroImg2,
      title: t('hero_title2'),
      subtitle: t('hero_subtitle2'),
      btnText: t('hero_cta2'),
      btnClass: "btn-yellow",
      action: () => {
        setView('programas-integrales');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  ];

  // Efecto automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 9000);
    return () => clearInterval(interval);
  }, [slides.length, currentSlide]);

  // --- FUNCIONES PARA DETECTAR EL SWIPE ---
  const onTouchStart = (e) => {
    setTouchEnd(null); // Reseteamos el final en cada nuevo toque
    setTouchStart(e.targetTouches[0].clientX); // Guardamos dónde puso el dedo
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX); // Actualizamos mientras mueve el dedo
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      // Deslizó hacia la izquierda (Siguiente foto)
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else if (isRightSwipe) {
      // Deslizó hacia la derecha (Foto anterior)
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  return (
    <header 
      className="hero-section"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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

      <div className="promo-bar">
        <p>{t('promo_bar')}</p>
      </div>

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