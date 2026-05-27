
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useLanguage } from '../../context/LanguageContext';
import './ContactForm.css';

const ContactForm = () => {
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

    // 1. Validar Nombre (> 4 caracteres)
    if (formData.nombre.trim().length <= 4) {
      return Swal.fire({
        icon: 'warning',
        title: t('val_name_title'),
        text: t('val_name_text'),
        confirmButtonColor: '#2E7D32'
      });
    }

    // 2. Validar Email usando Expresiones Regulares (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return Swal.fire({
        icon: 'warning',
        title: t('val_email_title'),
        text: t('val_email_text'),
        confirmButtonColor: '#2E7D32'
      });
    }

    // 3. Validar Política de Privacidad
    if (!formData.politica) {
      return Swal.fire({
        icon: 'warning',
        title: t('val_policy_title'),
        text: t('val_policy_text'),
        confirmButtonColor: '#2E7D32'
      });
    }

    // Si todas las validaciones pasan, iniciamos el envío
    setLoading(true);

    try {
      // Simulamos latencia de red de 1.5 segundos
      await new Promise(resolve => setTimeout(resolve, 1500));

      Swal.fire({
        icon: 'success',
        title: t('form_success'),
        text: t('form_success_text'),
        confirmButtonColor: '#2E7D32'
      });

      
      setFormData({
        nombre: '', empresa: '', email: '', telefono: '', mensaje: '', politica: false
      });
    } catch (error) {
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

          <div className="checkbox-group">
            <input id="politica" type="checkbox" checked={formData.politica} onChange={handleChange} required />
            <label htmlFor="politica">{t('lbl_policy')}</label>
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