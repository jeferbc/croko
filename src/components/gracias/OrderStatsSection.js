import React from 'react';
import { Row, Col } from 'reactstrap';

const OrderStatsSection = ({ formattedAmount }) => {
  return (
    <Row className="text-center mb-32 order-stats">
      <Col xs="12" className="mb-3">
        <div className="stat-box">
          <h3 className="text-gold mb-2">{formattedAmount}</h3>
          <p className="text-muted mb-0">Total Pagado</p>
        </div>
      </Col>
    </Row>
  );
};

export default OrderStatsSection;
