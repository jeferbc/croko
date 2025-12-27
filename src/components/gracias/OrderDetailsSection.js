import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import OrderCard from '@/components/cards/OrderCard';
import OrderStatsSection from './OrderStatsSection';
import WhatsNextSection from './WhatsNextSection';
import CTAButtons from './CTAButtons';

const OrderDetailsSection = ({ orderData, onWhatsAppClick }) => {
  return (
    <section className="pt-3 pb-5">
      <Container>
        <Row>
          <Col lg="8" className="mx-auto">
            <OrderCard
              className="mb-4"
              image="https://ik.imagekit.io/ge17f66b4ma/Kit%20foto%20690x551_2rLNnbXrzh.png"
              orderId={orderData.orderId}
              orderDate={orderData.date}
              status="Confirmado ✓"
              title="Kit Maquillaje Prenatal"
              description="¡Felicitaciones por tu compra! El siguiente paso es coordinar los detalles de envío vía WhatsApp para que recibas tu kit lo antes posible."
            />

            <OrderStatsSection formattedAmount={orderData.formattedAmount} />

            <WhatsNextSection />

            <CTAButtons onWhatsAppClick={onWhatsAppClick} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OrderDetailsSection;
