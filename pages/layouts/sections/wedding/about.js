import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const About = () => (
    <section className="wedding format" id="about">
        <Container>
            <Row>
                <Col md="8"  className="offset-md-2">
                    <div className="title">
                        <img alt="" className="img-fluid title-img"
                            src="/assets/images/wedding-img/bottom.png" />
                        <div className="main-title">
                            <h2 className="gradient-text">Carolina Rincón</h2>
                        </div>
                        <div className="sub-title">
                            <p>Maquillaje artístico profesional para embarazadas.</p>
                        </div>
                    </div>
                </Col>
                <Col xl="4" md="6" className="offset-xl-2">
                    <img alt="" className="img-fluid about-img" src="https://ik.imagekit.io/ge17f66b4ma/MIA-1_gfnS344_D.png?updatedAt=1626907771292" />
                </Col>
                <Col xl="4" lg="6" md="6">
                    <div className="center-text">
                        <div>
                            <div className="format-small-text text-center">
                                <h6>#Maquillajeparaembarazadas</h6>
                            </div>
                            <div className="format-head-text">
                                {/* <h3 className="about-font-header gradient-text">about</h3> */}
                            </div>
                            <div className="format-sub-text">
                                <p className="about-para text-center">
                                    Mi pasión por el maquillaje prenatal surgió en el 2016, gracias a una iniciativa promovida
                                    por la Universidad de Antioquia, donde la piel de las embarazadas se convirtió en un lienzo
                                    portentoso para realizar nuestras obras de arte. Allí pinté la primera barriguita y me enamoré
                                    por completo de la experiencia, pues los bebés reaccionan al cosquilleo que produce el pincel e
                                    inicia una pequeña danza entre sus “pataditas” y el movimiento del trazo. Esta conexión mágica
                                    fue la que me motivó a iniciar este proyecto.
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default About;