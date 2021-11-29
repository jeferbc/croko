import React, { Fragment } from 'react';
import { PricingResume1 } from '../../../../database/elements/price/database'
import { Col, Row } from 'reactstrap'

const PriceStyle = {
    div: {
        minHeight: "120px"
    },
    bottom: {
        paddingBottom: '20px'
    }


}
const PricingThree = () => (
    <Row className="wedding">
        {
            PricingResume1.map((item, i) => {
                return (
                    <Col xs="12" md="6" lg="4" key={i}>                                
                        <div className="price-container price-margin shadows bg-white text-center mb-sm-3">
                            <div className="price-feature-container set-relative">
                                <div className="feature-text">
                                    <span className="flaticon-rocket-ship feature-icon"></span>
                                    <h4 className="feature-text-heading text-center bold text-uppercase font-primary">{item.title}</h4>
                                    <hr className="set-border" />
                                </div>
                                <div className="price-features font-primary" style={PriceStyle.div}>
                                    <h5 className="price-feature text-center">{item.feature1}</h5>
                                    <h5 className="price-feature text-center">{item.feature2}</h5>
                                    <h5 className="price-feature text-center">{item.feature3}</h5>
                                </div>
                                <div className="price-value">
                                    <h6 className="price text-center font-primary">$<span className="large font-primary">{item.price}</span></h6>
                                </div>
                                <a className="btn btn-default btn-white" target="_blank" href={"https://wa.me/573168161717?text=Hola, estoy interesado en el plan " + item.title + " en Medellín"}>Contáctanos</a>
                            </div>
                        </div>
                    </Col>
                )
            })
        }
    </Row>
)

export default PricingThree;