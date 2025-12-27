import React from 'react';
import { Container } from 'reactstrap';
import Title from '@/components/common/Title';

const SuccessBanner = () => {
  return (
    <section className="gracias-hero py-5">
      <Container>
        <div className="text-center mb-4">
          <div className="mb-4">
            <i className="fa fa-check-circle fa-5x text-gold"></i>
          </div>
          <Title heading="¡Gracias por tu compra!" />
          <p className="lead text-muted mt-3">
            Tu pedido ha sido confirmado exitosamente
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SuccessBanner;
