import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const LoadingState = ({ message = 'Cargando...' }) => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col xs="12" className="text-center">
            <div className="py-5">
              <i className="fa fa-spinner fa-spin fa-3x text-primary mb-3"></i>
              <h4>{message}</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoadingState;
