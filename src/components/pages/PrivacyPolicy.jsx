
import React, { useEffect } from 'react';
import './LegalPages.css';

const PrivacyPolicy = () => {
  // Asegura que la página cargue desde arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page-container">
      <div className="container">
        <h1 className="legal-title">Política de Privacidad</h1>
        <p className="legal-last-updated">Última actualización: {new Date().toLocaleDateString()}</p>

        <div className="legal-content">
          <h2>1. Introducción</h2>
          <p>
            En <strong>Euno 360</strong>, respetamos su privacidad y nos comprometemos a proteger sus datos personales. 
            Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y salvaguardamos su información 
            cuando visita nuestro sitio web y utiliza nuestros servicios de consultoría.
          </p>

          <h2>2. Información que Recopilamos</h2>
          <p>
            Podemos recopilar información personal que usted nos proporciona voluntariamente al completar formularios en nuestro sitio web, 
            suscribirse a boletines o contactarnos. Esta información puede incluir, entre otros:
          </p>
          <ul>
            <li>Nombre completo</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Nombre de la empresa o proyecto</li>
            <li>Cualquier otra información que decida proporcionarnos en su mensaje</li>
          </ul>

          <h2>3. Uso de la Información</h2>
          <p>Utilizamos la información recopilada para los siguientes propósitos:</p>
          <ul>
            <li>Proveer, operar y mantener nuestros servicios.</li>
            <li>Mejorar y personalizar su experiencia en nuestro sitio web.</li>
            <li>Comunicarnos con usted, responder a sus consultas y enviarle propuestas comerciales.</li>
            <li>Enviar correos electrónicos periódicos con actualizaciones, promociones o noticias de la empresa (siempre con la opción de darse de baja).</li>
          </ul>

          <h2>4. Protección de sus Datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas diseñadas para proteger su información personal contra 
            accesos no autorizados, pérdida, alteración o destrucción. Sus datos no serán vendidos, intercambiados ni transferidos 
            a terceros sin su consentimiento, excepto cuando sea necesario para cumplir con un requerimiento legal.
          </p>

          <h2>5. Sus Derechos</h2>
          <p>
            De acuerdo con la legislación vigente en materia de protección de datos (incluyendo la Ley de Protección de Datos Personales 25.326), 
            usted tiene derecho a solicitar el acceso, rectificación, actualización o eliminación de sus datos personales. 
            Para ejercer estos derechos, puede comunicarse con nosotros a través de los canales de contacto provistos en este sitio web.
          </p>

          <h2>6. Cambios en esta Política</h2>
          <p>
            Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. 
            Cualquier cambio será publicado en esta página con una fecha de revisión actualizada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;