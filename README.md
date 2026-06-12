
# 🚀 Euno 360 - Plataforma Web de Coaching y Consultoría

Euno 360 es una Single Page Application (SPA) moderna y altamente responsiva desarrollada en React. La plataforma está diseñada para presentar servicios corporativos de consultoría en las áreas de Coaching, Ventas y Marketing, integrando una experiencia de usuario (UX) fluida, soporte multilenguaje y un diseño de interfaz premium.

## ✨ Características Principales

- **Enrutamiento Nativo Personalizado:** Navegación SPA fluida construida desde cero utilizando la **History API** del navegador, permitiendo el uso de botones "Atrás/Adelante" y URLs dinámicas sin depender de librerías externas como `react-router-dom`.
- **Soporte Multilenguaje (i18n):** Implementación de un contexto global (`LanguageContext`) para cambiar instantáneamente el idioma de la aplicación (Español, Inglés, Portugués) sin recargar la página.
- **Mega Menú y Navegación Dinámica:** Sistema de navegación complejo con menús desplegables (dropdowns) adaptativos para Desktop y un sistema de acordeón elegante para dispositivos móviles.
- **Diseño Modular de Servicios:** Renderizado dinámico de los servicios distintos  (Coaching Individual, Mentoría en Ventas, Marketing 360°, etc.) a través de un único componente reutilizable (`ServiceDetail`).
- **Formulario de Contacto Seguro:** Integración con backend, validaciones estrictas (Regex), manejo de estado de carga y notificaciones de interfaz mejoradas con **SweetAlert2**.
- **Cumplimiento Legal:** Páginas dedicadas a Políticas de Privacidad y Términos y Condiciones, accesibles desde el Footer y enlazadas directamente en el opt-in del formulario de contacto.

## 🛠️ Tecnologías y Herramientas

### Frontend
- **React 18** (Functional Components, Hooks, Context API)
- **Vite** (Build tool y entorno de desarrollo rápido)
- **CSS3** (Arquitectura basada en Variables CSS, Flexbox, Grid Layout, animaciones fluidas y Media Queries para diseño Mobile-First)
- **SweetAlert2** (Para pop-ups y alertas de usuario interactivas)

### Backend (Integración)
- Preparado para consumir API RESTful construida en **Node.js / Express** para la gestión de leads del formulario de contacto.

🎨 Detalles Técnicos Destacados
CSS Inteligente: Uso intensivo de linear-gradient dinámicos, background-clip: text para textos con gradiente 360°, y variables CSS (var(--green-main), var(--red-main), var(--yellow-main)) para mantener una identidad de marca cohesiva en todo el código.

Prevención de Renders Innecesarios: Uso de useCallback en el orquestador de vistas (App.jsx) para optimizar el rendimiento al cambiar de páginas.

Accesibilidad y UX: Scroll automático hacia la parte superior (window.scrollTo({ top: 0, behavior: 'smooth' })) al navegar entre vistas, y e.stopPropagation() implementado en enlaces anidados para evitar conflictos de clicks (ej. Checkbox de Políticas).

📄 Licencia
Este proyecto es de código cerrado y propiedad de Euno 360. Todos los derechos reservados.