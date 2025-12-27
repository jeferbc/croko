import React from 'react';

const WhatsNextSection = () => {
  return (
    <div className="whats-next-section">
      <h5 className="mb-3">¿Qué sigue?</h5>
      <ul className="list-unstyled">
        <li className="mb-2">
          <i className="fa fa-check text-success me-2"></i>
          Coordinaremos por WhatsApp los detalles de envío de tu pedido
        </li>
        <li className="mb-2">
          <i className="fa fa-check text-success me-2"></i>
          Tu kit llegará en 3-5 días hábiles
        </li>
        <li className="mb-2">
          <i className="fa fa-check text-success me-2"></i>
          Te mantendremos informado del estado de tu pedido
        </li>
      </ul>
    </div>
  );
};

export default WhatsNextSection;
