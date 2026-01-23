import React from 'react';
import { PricingResume1 } from '@/database/elements/price/database'
import { Col, Row } from 'reactstrap'
import Link from 'next/link'

const PriceStyle = {
    div: {
        minHeight: "200px"
    },
    cardContainer: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    featureContainer: {
        minHeight: "180px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        flex: 1
    },
    innerContainer: {
        display: "flex",
        flexDirection: "column",
        flex: 1
    },
    color: {
        color: "#ffffff"
    },
    recommended: {
        border: '3px solid #c0882f',
        position: 'relative',
        transform: 'scale(1.05)',
        zIndex: 1
    },
    badge: {
        position: 'absolute',
        top: '-12px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#c0882f',
        color: '#fff',
        padding: '5px 20px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap'
    }
}
const PricingThree = () => (
    <Row className="wedding justify-content-center">
        {
            PricingResume1.map((item, i) => {
                return (
                    <Col xs="12" md="6" lg="4" key={i} className="d-flex">
                        <div className="price-container price-margin shadows bg-white text-center mb-sm-3 w-100" style={PriceStyle.cardContainer}>
                            <div className="price-feature-container set-relative" style={PriceStyle.innerContainer}>
                                <div className="feature-text">
                                    <span className="flaticon-rocket-ship feature-icon"></span>
                                    <h4 className="feature-text-heading text-center bold text-uppercase font-primary">{item.title}</h4>
                                    <hr className="set-border" />
                                </div>
                                <div className="price-features font-primary" style={PriceStyle.featureContainer}>
                                    <h5 className="price-feature text-center">{item.feature1}</h5>
                                    <h5 className="price-feature text-center">{item.feature2}</h5>
                                    <h5 className="price-feature text-center">{item.feature3}</h5>
                                    {item.feature4 && <h5 className="price-feature text-center">{item.feature4}</h5>}
                                </div>
                                <div className="price-value mt-auto">
                                    <h6 className="price text-center font-primary">$<span className="large font-primary">{item.price}</span></h6>
                                </div>
                                <a className="btn btn-default btn-white whatsapp-local" target="_blank" href={"https://wa.me/573168161717?text=Hola, estoy interesado en el plan " + item.title + " en Medellín"}>Contáctanos</a>
                            </div>
                        </div>
                    </Col>
                )
            })
        }
        <Col xs="12" md="6" lg="4" key="4" className="d-none d-sm-flex">
            <div className="price-container price-margin shadows text-center mb-sm-3 w-100" style={{...PriceStyle.cardContainer, ...PriceStyle.recommended}}>
                <span style={PriceStyle.badge}>Más Popular</span>
                <div className="price-feature-container set-relative" style={PriceStyle.innerContainer}>
                    <div className="feature-text">
                        <span className="flaticon-diamond feature-icon"></span>
                        <h4 className="feature-text-heading text-center bold text-uppercase font-primary">KIT MAQUILLAJE</h4>
                        <hr className="set-border" />
                    </div>
                    <div className="price-features font-primary" style={PriceStyle.featureContainer}>
                        <h5 className="price-feature text-center">4 diseños a elegir</h5>
                        <h5 className="price-feature text-center">Pinturas y pinceles</h5>
                        <h5 className="price-feature text-center">Videotutoriales</h5>
                        <h5 className="price-feature text-center">Envío incluido a toda Colombia</h5>
                        <h5 className="price-feature text-center">Experiencia familiar</h5>
                    </div>
                    <div className="price-value mt-auto">
                        <h6 className="price text-center">$<span className="large">150.000</span></h6>
                    </div>
                    <Link href='/kit-pinta-barriguitas' className="btn btn-default btn-white text-white">Ver kit de maquillaje</Link>
                </div>
            </div>
        </Col>
        <Col md="6" lg="4" className="d-sm-none">
            <div className="price-container shadows text-center" style={{...PriceStyle.div, ...PriceStyle.recommended}}>
                <span style={PriceStyle.badge}>Más Popular</span>
                <div className="service-feature">
                    <div className="feature-text">
                    <span className="flaticon-diamond feature-icon" style={PriceStyle.color}></span>
                        <h4 className="feature-text-heading text-center bold text-uppercase" style={PriceStyle.color}>KIT MAQUILLAJE</h4>
                    </div>
                </div>
                <div>
                    <div className="price-feature-container">
                        <div className="price-features">
                            <h5 className="price-feature text-center">4 diseños a elegir</h5>
                            <h5 className="price-feature text-center">Pinturas y pinceles</h5>
                            <h5 className="price-feature text-center">Videotutoriales</h5>
                            <h5 className="price-feature text-center">Envío incluido a toda Colombia</h5>
                            <h5 className="price-feature text-center">Experiencia familiar</h5>
                        </div>
                        <div className="price-value">
                            <h6 className="price text-center">$<span className="large">150.000</span></h6>
                        </div>
                        <Link href='/kit-pinta-barriguitas' className="btn btn-default btn-white text-white">Ver kit de maquillaje</Link>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
)

export default PricingThree;