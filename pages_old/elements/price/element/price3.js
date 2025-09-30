import React from 'react';
import { PricingResume1 } from '../../../../database/elements/price/database'
import { Col, Row } from 'reactstrap'
import Link from 'next/link'

const PriceStyle = {
    div: {
        minHeight: "170px"
    },
    color: {
        color: "#ffffff"
    }
}
const PricingThree = () => (
    <Row className="wedding">
        {
            PricingResume1.map((item, i) => {
                return (
                    <Col xs="12" md="6" key={i}>                                
                        <div className="price-container price-margin shadows bg-white text-center mb-sm-3">
                            <div className="price-feature-container set-relative">
                                <div className="feature-text">
                                    <span className="flaticon-rocket-ship feature-icon"></span>
                                    <h4 className="feature-text-heading text-center bold text-uppercase font-primary">{item.title}</h4>
                                    <hr className="set-border" />
                                </div>
                                <div className="price-features font-primary">
                                    <h5 className="price-feature text-center">{item.feature1}</h5>
                                    <h5 className="price-feature text-center">{item.feature2}</h5>
                                    <h5 className="price-feature text-center">{item.feature3}</h5>
                                </div>
                                <div className="price-value">
                                    <h6 className="price text-center font-primary">$<span className="large font-primary">{item.price}</span></h6>
                                </div>
                                <a className="btn btn-default btn-white whatsapp-local" target="_blank" href={"https://wa.me/573168161717?text=Hola, estoy interesado en el plan " + item.title + " en Medellín"}>Contáctanos</a>
                            </div>
                        </div>
                    </Col>
                )
            })
        }
        <Col xs="12" md="6" key="4" className="d-none d-sm-block">                                
            <div className="price-container price-margin shadows text-center mb-sm-3">
                <div className="price-feature-container set-relative">
                    <div className="feature-text">
                        <span className="flaticon-diamond feature-icon"></span>
                        <h4 className="feature-text-heading text-center bold text-uppercase font-primary">KIT MAQUILLAJE</h4>
                        <hr className="set-border" />
                    </div>
                    <div className="price-features font-primary" style={PriceStyle.div}>
                        <h5 className="price-feature text-center">3 diseños estandar</h5>
                        <h5 className="price-feature text-center">Pinturas y pinceles</h5>
                        <h5 className="price-feature text-center">Videotutoriales</h5>
                        <h5 className="price-feature text-center">Envío incluido a toda Colombia</h5>
                    </div>
                    <div className="price-value">
                        <h6 className="price text-center">$<span className="large">150.000</span></h6>
                    </div>
                    <Link href='/kit'><a className="btn btn-default btn-white text-white">Mas información</a></Link>
                </div>
            </div>
        </Col>
        <Col md="6" className="d-sm-none">
            <div className="price-container shadows text-center" style={PriceStyle.div}>
                <div className="service-feature">
                    <div className="feature-text">
                    <span className="flaticon-diamond feature-icon" style={PriceStyle.color}></span>
                        <h4 className="feature-text-heading text-center bold text-uppercase" style={PriceStyle.color}>KIT MAQUILLAJE</h4>
                    </div>
                </div>
                <div>
                    <div className="price-feature-container">
                        <div className="price-features">
                        <h5 className="price-feature text-center">3 diseños estandar</h5>
                            <h5 className="price-feature text-center">Pinturas y pinceles</h5>
                            <h5 className="price-feature text-center">Videotutoriales</h5>
                            <h5 className="price-feature text-center">Envío incluido a toda Colombia</h5>
                        </div>
                        <div className="price-value">
                            <h6 className="price text-center">$<span className="large">150.000</span></h6>
                        </div>
                        <Link href='/kit'><a className="btn btn-default btn-white text-white">Mas información</a></Link>
                    </div>
                </div>
            </div>                          
        </Col>
    </Row>
)

export default PricingThree;