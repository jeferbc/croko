import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import WhatsAppCountdown from '@/components/common/WhatsAppCountdown';

const WhatsAppSection = ({ onComplete, onManualClick }) => {
  return (
    <section className="pt-5 pb-3">
      <Container>
        <Row>
          <Col lg="8" className="mx-auto">
            <div className="text-center p-4 whatsapp-section rounded mb-0">
              <h4 className="mb-4 text-gold">Continuemos por WhatsApp</h4>
              <p className="text-muted mb-4">
                En unos segundos serás redirigido a WhatsApp para que nos compartas tus datos de envío y podamos coordinar la entrega de tu pedido.
              </p>
              <WhatsAppCountdown
                onComplete={onComplete}
                onManualClick={onManualClick}
                seconds={15}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatsAppSection;
