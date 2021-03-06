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
            <Col lg="6">
                <ProductCarousel />
            </Col>
            <Col lg="6">
                <div className="blog agency pricing inner-pagetitle pt-4 pt-lg-0">
                    <div className="price-container price-margin shadows bg-white text-left mb-sm-0">
                        <div className="price-feature-container set-relative text-center text-lg-left">
                            <h2 className="feature-text-heading text-center text-lg-left bold text-uppercase pb-3">Kit maquillaje prenatal</h2>
                            <h4 className="feature-text-heading text-center text-lg-left pb-3">Envío incluido a todo Colombia</h4>
                            <div className="price-value mb-3">
                                <h6 className="price text-center text-lg-left">$<span className="large">150.000</span></h6>
                            </div>
                            <a className="btn btn-default btn-white whatsapp-kit" target="_blank" href={"https://wa.me/573168161717?text=Hola, estoy interesado en el kit de maquillaje prenatal"}>Comprar</a>
                            <div className="font-primary pt-3">
                                <h3 className="feature-text-heading text-center text-lg-left bold pb-2">Descripción</h3>
                                <p className="price-feature text-justify">
                                    Contiene 3 dibujos estándar (adaptables al género del bebé),
                                    4 pinceles, pinturas corporales y videos guía para pintar la
                                    barriguita en compañía de tus familiares y/o amigos.
                                    Es ideal para los últimos meses del embarazo, regalo de baby shower y
                                    descubrimiento de género.</p>
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