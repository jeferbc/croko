import React from 'react';

const CTAButtons = ({ onWhatsAppClick }) => {
  return (
    <div className="text-center mt-5 cta-buttons">
      <a
        href="/"
        className="btn btn-outline-primary me-2 mb-2"
      >
        Volver al Inicio
      </a>
      <button
        onClick={onWhatsAppClick}
        className="btn btn-success mb-2"
      >
        <i className="fa fa-whatsapp me-2"></i>
        Contactar por WhatsApp
      </button>
    </div>
  );
};

export default CTAButtons;
