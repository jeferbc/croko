import React from 'react';
import { Container, Row, Col } from 'reactstrap'
const Footer = () => (
    <footer className="wedding copyright copyright-bg position-relative">
        <Container>
            <Row>
                <Col xl="3" sm="12">
                    <div className="text-center">
                        <div className="link-horizontal">
                            <ul>
                                <li>
                                    <a className="copyright-text" href="https://www.facebook.com/crokolina" target='_blank'>
                                        <i aria-hidden="true" className="fa fa-facebook gradient-text"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="copyright-text " href="https://www.instagram.com/croko_maquillaje_embarazada/" target='_blank'>
                                        <i aria-hidden="true" className="fa fa-instagram gradient-text"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="copyright-text" href="https://wa.me/573168161717?text=Hola, estoy interesado en maquillaje prenatal." target='_blank'>
                                        <i aria-hidden="true" className="fa fa-whatsapp gradient-text"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col xl="6" sm="12">
                    <div className="m-l-auto center-para">
                        <h6 className="copyright-text text-center">2016 - 2021 Croko</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer;