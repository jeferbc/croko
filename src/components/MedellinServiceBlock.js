import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'reactstrap'
import SectionTitle from './SectionTitle'

const MedellinServiceBlock = () => (
    <section
        className="wedding format"
        aria-label="Servicio presencial de belly painting en Medellín"
        style={{ backgroundColor: '#faf7f2' }}
    >
        <Container>
            <Row>
                <Col md="8" className="offset-md-2">
                    <SectionTitle title="¿Vives en Medellín? Sesiones presenciales con Carolina" />
                </Col>
                <Col md="10" className="offset-md-1 text-center">
                    <div className="format-sub-text">
                        <p className="about-para">
                            Además del Kit, también ofrezco sesiones de <strong>belly painting a domicilio en Medellín
                            y el Valle de Aburrá</strong>. Pinturas cosméticas profesionales y diseños únicos para cada familia.
                        </p>

                        <address className="about-para" style={{ fontStyle: 'normal' }}>
                            Zonas de servicio: Medellín, Envigado, Bello, Itagüí, Sabaneta
                        </address>

                        <div className="pt-3 pb-2">
                            <Link href="/belly-painting-medellin" className="btn btn-default btn-white">
                                Reservar sesión presencial
                            </Link>
                        </div>

                        <p className="about-para mt-3" style={{ fontSize: '0.95rem' }}>
                            <a href="tel:+573168161717" style={{ color: 'inherit', textDecoration: 'none' }}>
                                +57 316 816 1717
                            </a>
                            {' · '}
                            <a href="mailto:pintabarriguitas@croko.co" style={{ color: 'inherit', textDecoration: 'none' }}>
                                pintabarriguitas@croko.co
                            </a>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default MedellinServiceBlock
