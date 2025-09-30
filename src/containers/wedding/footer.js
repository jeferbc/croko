import React from 'react';
import Link from 'next/link';
import SocialMedia from '@/containers/elements/common/socialMedia';
import { Container, Row, Col } from 'reactstrap'
const Footer = (props) => (
    <footer className="wedding copyright copyright-bg position-relative">
        <Container>
            <Row>
                <Col xl="3" sm="12">
                    <div className="text-center">
                        <div className="link-horizontal">
                            <ul>
                                <SocialMedia kit={props.kit} />
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col xl="6" sm="12">
                    <div className="m-l-auto center-para">
                        <h6 className="copyright-text text-center">2016 - {new Date().getFullYear()} Croko</h6>
                        <div className="legal-links text-center mt-2">
                            <Link href="/terminos-y-condiciones" style={{color: '#888', fontSize: '12px', textDecoration: 'none', marginRight: '15px'}}>
                                Términos y Condiciones
                            </Link>
                            <Link href="/politica-de-privacidad" style={{color: '#888', fontSize: '12px', textDecoration: 'none'}}>
                                Política de Privacidad
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer;