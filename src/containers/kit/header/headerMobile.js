'use client'
import React from 'react';
import {Container,Row,Col} from 'reactstrap'
import Link from 'next/link'

const HeaderMobile = () => (
    <section className="wedding header" id="header">
        <div className="wedding-content">
            <div className="wedding bg slider-bg">
                <Container>
                    <Row>
                        <Col>
                            <div className="d-flex flex-column justify-content-center align-items-center gap-3 m-t-20">
                                        <div className="m-t-20 text-center">
                                            <h1 className="custom-title bold text-uppercase">Kit pintabarriguitas para embarazadas</h1>
                                        </div>
                                <h4 className="header-sub-text text-center m-t-20">
                                    Incluye todo lo necesario para pintar tu barriguita en familia.
                                    Ideal para regalar en baby shower.
                                </h4>
                                <div>
                                    <a className="btn btn-default btn-white purchase-kit m-t-20" target="_blank" href="https://checkout.wompi.co/l/tIZLKf">Comprar</a>
                                </div>
                                <div className="bottom-0 girl m-t-25">
                                    <img alt="" className="img-fluid" id="girl" src="https://ik.imagekit.io/ge17f66b4ma/Samy_QLzwZtT-Tg.png?updatedAt=1626907765924" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </section>
)

export default HeaderMobile;
