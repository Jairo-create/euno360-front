
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useLanguage } from '../../context/LanguageContext';
import './ContactForm.css';

// 1. Recibimos setView como prop
const ContactForm = ({ setView }) => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    nombre: '', empresa: '', email: '', telefono: '', mensaje: '', politica: false
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.nombre.trim().length <= 4) {
      return Swal.fire({
        icon: 'warning',
        title: t('val_name_title'),
        text: t('val_name_text'),
        confirmButtonColor: '#2E7D32'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return Swal.fire({
        icon: 'warning',
        title: t('val_email_title'),
        text: t('val_email_text'),
        confirmButtonColor: '#2E7D32'
      });
    }

    if (!formData.politica) {
      return Swal.fire({
        icon: 'warning',
        title: t('val_policy_title'),
        text: t('val_policy_text'),
        confirmButtonColor: '#2E7D32'
      });
    }

    setLoading(true);

  try {
      // Reemplaza esto con la URL que te dio Render.com:
      const API_URL = 'https://backend-euno360.onrender.com'; 
      
      const response = await fetch(`${API_URL}/api/contacto`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        Swal.fire({
          icon: 'success',
          title: t('form_success'),
          text: t('form_success_text'),
          confirmButtonColor: '#2E7D32'
        });

        setFormData({
          nombre: '', empresa: '', email: '', telefono: '', mensaje: '', politica: false
        });
      } else {
        throw new Error(result.message || 'Error en el servidor');
      }

    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      Swal.fire({
        icon: 'error',
        title: t('form_error'),
        text: t('form_error_text'),
        confirmButtonColor: '#C62828'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="container contact-container">
        <h2 className="section-title">{t('form_title')}</h2>
        <div className="section-divider multi-color-divider"></div>

        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="form-grid">
            <div className="input-group">
              <label htmlFor="nombre">{t('lbl_nombre')}</label>
              <input id="nombre" type="text" value={formData.nombre} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="empresa">{t('lbl_empresa')}</label>
              <input id="empresa" type="text" value={formData.empresa} onChange={handleChange} />
            </div>
          </div>

          <div className="form-grid">
            <div className="input-group">
              <label htmlFor="email">{t('lbl_email')}</label>
              <input id="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="telefono">{t('lbl_tel')}</label>
              <input id="telefono" type="tel" value={formData.telefono} onChange={handleChange} />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="mensaje">{t('lbl_msg')}</label>
            <textarea id="mensaje" rows="4" value={formData.mensaje} onChange={handleChange} required></textarea>
          </div>

          {/* 2. Sección del Checkbox actualizada con Enlaces Legales */}
          <div className="checkbox-group">
            <input id="politica" type="checkbox" checked={formData.politica} onChange={handleChange} required />
            <label htmlFor="politica">
              He leído y acepto la{' '}
              <a 
                href="#privacidad" 
                className="form-legal-link"
                onClick={(e) => { 
                  e.preventDefault(); 
                  e.stopPropagation(); // Evita que se marque el checkbox al hacer clic en el texto
                  setView('privacidad'); 
                  window.scrollTo({ top: 0, behavior: 'smooth' }); 
                }}
              >
                Política de Privacidad
              </a>
              {' '}y los{' '}
              <a 
                href="#terminos" 
                className="form-legal-link"
                onClick={(e) => { 
                  e.preventDefault(); 
                  e.stopPropagation();
                  setView('terminos'); 
                  window.scrollTo({ top: 0, behavior: 'smooth' }); 
                }}
              >
                Términos y Condiciones
              </a>.
            </label>
          </div>

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? '...' : t('btn_send')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;