import React from 'react';
import { Container, Row, Col } from 'reactstrap'
const Footer = () => (
    <footer className="wedding copyright copyright-bg">
        <Container>
            <Row>
                <Col xl="3" sm="12">
                    <div className="text-center">
                        <div className="link-horizontal">
                            <ul>
                                <li>
                                    <a className="copyright-text" href="#">
                                        <i aria-hidden="true" className="fa fa-facebook gradient-text"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="copyright-text " href="#">
                                        <i aria-hidden="true" className="fa fa-instagram gradient-text"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="copyright-text" href="#">
                                        <i aria-hidden="true" className="fa fa-whatsapp gradient-text"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col xl="6" sm="12">
                    <div className="m-l-auto center-para">
                        <h6 className="copyright-text text-center">2009 - 2021 Croko</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer;