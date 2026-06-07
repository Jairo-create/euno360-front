
import React, { useEffect } from 'react';
import './LegalPages.css';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page-container">
      <div className="container">
        <h1 className="legal-title">Términos y Condiciones</h1>
        <p className="legal-last-updated">Última actualización: {new Date().toLocaleDateString()}</p>

        <div className="legal-content">
          <h2>1. Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar el sitio web de <strong>Euno 360</strong>, usted acepta estar sujeto a estos 
            Términos y Condiciones y a todas las leyes y regulaciones aplicables. Si no está de acuerdo con 
            alguno de estos términos, tiene prohibido usar o acceder a este sitio.
          </p>

          <h2>2. Propiedad Intelectual</h2>
          <p>
            Todo el contenido presente en este sitio web, incluyendo textos, gráficos, logotipos, imágenes, 
            clips de audio, descargas digitales y compilaciones de datos, es propiedad de Euno 360 o de sus 
            proveedores de contenido y está protegido por las leyes de propiedad intelectual y derechos de autor aplicables.
          </p>

          <h2>3. Uso de los Servicios</h2>
          <p>
            La información proporcionada en este sitio web tiene un propósito puramente informativo y comercial. 
            La contratación definitiva de nuestros servicios de Coaching, Ventas o Marketing estará sujeta a la 
            firma de un contrato o propuesta comercial independiente que detallará los alcances, tiempos y costos.
          </p>

          <h2>4. Limitación de Responsabilidad</h2>
          <p>
            Euno 360 no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente 
            que resulte del uso o la imposibilidad de usar este sitio web o los servicios ofrecidos, incluso si 
            se ha advertido a Euno 360 de la posibilidad de tales daños. 
          </p>

          <h2>5. Enlaces a Terceros</h2>
          <p>
            Nuestro sitio web puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan 
            únicamente para su conveniencia. Euno 360 no tiene control sobre el contenido de esos sitios y no 
            asume ninguna responsabilidad por ellos ni por ninguna pérdida o daño que pueda surgir de su uso.
          </p>

          <h2>6. Ley Aplicable</h2>
          <p>
            Estos términos y condiciones se rigen y se interpretan de acuerdo con las leyes de la República Argentina. 
            Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales competentes.
          </p>

          <h2>7. Modificaciones</h2>
          <p>
            Euno 360 puede revisar estos términos de servicio para su sitio web en cualquier momento sin previo aviso. 
            Al utilizar este sitio web, usted acepta estar sujeto a la versión actual de estos Términos y Condiciones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;