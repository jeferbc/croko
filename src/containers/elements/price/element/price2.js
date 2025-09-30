import React, { Fragment } from 'react'
import { Col } from 'reactstrap'

const PriceStyle = {
    div: {
        minHeight: "120px"
    }
}

const PricingTwo = () => (
    <Fragment>
        <Col md="6">
            <div className="price-container shadows text-center">
                <div className="service-feature ">
                    <div className="feature-text">
                        <span className="flaticon-rocket-ship feature-icon "></span>
                        <h3 className="text-white feature-text-heading text-center">Kit Maquillaje</h3>
                    </div>
                </div>
                <div>
                    <div className="price-feature-container" style={PriceStyle.div}>
                        <div className="price-features">
                        <h5 className="price-feature text-center">3 diseños estandar</h5>
                            <h5 className="price-feature text-center">Pinturas y pinceles</h5>
                            <h5 className="price-feature text-center">Videotutoriales</h5>
                            <h5 className="price-feature text-center">Envío incluido a toda Colombia</h5>
                        </div>
                        <div className="price-value">
                            <h6 className="price text-center">$<span className="large">150.000</span>/month</h6>
                        </div>
                        <a className="btn btn-default btn-white" href="#">Mas información</a>
                    </div>
                </div>
            </div>                          
        </Col>
    </Fragment>
)

export default PricingTwo;