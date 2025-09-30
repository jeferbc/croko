import React from 'react';
import ProductCarousel from '../../../elements/productCarousel';
import {Container,Row,Col} from 'reactstrap'

const ContactButtonStyles = {
    a: {
        display: "inline-flex",
        width: "100%",
        justifyContent: "center"
    },
    p: {
        animation: 'none'
    }
}
const ProductSection = () => (
  <section className="wedding" id="product">
    <Container>
        <Row>
            <Col lg="6" className="d-block d-md-none">
                <h2 className="feature-text-heading text-center text-lg-left bold text-uppercase py-3 mb-3">Seguro y fácil de usar</h2>
            </Col>    
            <Col lg="6">
                <ProductCarousel />
            </Col>
            <Col lg="6">
                <div className="blog agency pricing inner-pagetitle pt-4 pt-lg-0">
                    <div className="price-container price-margin shadows bg-white text-left mb-sm-0">
                        <div className="price-feature-container set-relative text-center text-lg-left">
                            <h2 className="feature-text-heading text-center text-lg-left bold text-uppercase pb-3">Pinturas seguras para embarazadas</h2>
                            <h4 className="feature-text-heading text-center text-lg-left pb-3">Envío incluido a todo Colombia</h4>
                            <div className="price-value mb-3">
                                <h6 className="price text-center text-lg-left">$<span className="large">150.000</span></h6>
                            </div>
                            <a className="btn btn-default btn-white purchase-kit" target="_blank" href="https://checkout.wompi.co/l/tIZLKf">Comprar</a>
                            <div className="font-primary pt-3">
                                <h3 className="feature-text-heading text-center text-lg-left bold pb-2">Descripción</h3>
                                <p className="price-feature text-justify">
                                    Incluye 2 plantillas personalizables: elige desde nuestro catálogo de 30 diseños o envíanos los tuyos,
                                    teniendo en cuenta que debe ser siempre con un único personaje.
                                    4 pinceles, pinturas corporales seguras y videos guía para pintar la barriguita junto a familiares o amigos.
                                    Consulta las imágenes de referencia y elige tu diseño.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
)

export default ProductSection;