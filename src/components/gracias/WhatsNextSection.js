import React from 'react';

const WhatsNextSection = () => {
  return (
    <div className="whats-next-section">
      <h5 className="mb-3">¿Qué sigue?</h5>
      <ul className="list-unstyled">
        <li className="mb-2">
          <i className="fa fa-whatsapp text-success me-2"></i>
          Te contactaremos por WhatsApp para ayudarte a elegir tus 3 diseños favoritos del catálogo
        </li>
        <li className="mb-2">
          <i className="fa fa-map-marker text-success me-2"></i>
          Coordinaremos los detalles de envío a tu dirección
        </li>
        <li className="mb-2">
          <i className="fa fa-truck text-success me-2"></i>
          Tu kit llegará en 3-5 días hábiles
        </li>
      </ul>
    </div>
  );
};

export default WhatsNextSection;
