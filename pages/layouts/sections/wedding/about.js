import React from 'react';
import {Container,Row,Col} from 'reactstrap'
import Link from 'next/link'


const ContactButtonStyles = {
    a: {
        display: "inline-flex",
        width: "100%",
        justifyContent: "center"
    }
}

const About = () => (
    <section className="wedding format" id="about">
        <Container>
            <Row>
                <Col md="8"  className="offset-md-2">
                    <div className="title">
                        <img alt="" className="img-fluid title-img"
                            src="/assets/images/wedding-img/bottom.png" />
                        <div className="main-title">
                            <h2 className="gradient-text">Servicios</h2>
                        </div>
                        <div className="sub-title">
                            <p>Maquillaje artístico para embarazadas.</p>
                        </div>
                    </div>
                </Col>
                <Col xl="4" md="6" className="offset-xl-2">
                    <img alt="" className="img-fluid about-img" src="https://ik.imagekit.io/ge17f66b4ma/MIA-1_gfnS344_D.png?updatedAt=1626907771292" />
                </Col>
                <Col xl="4" lg="6" md="6">
                    <div className="center-text">
                        <div>
                            <div className="format-sub-text pt-3">
                                <p className="about-para" className="pt-3"><strong>Maquillaje a domicilio en Medellín</strong></p>
                                <p className="about-para">Realizo personalmente la sesión de maquillaje de barriguitas a domicilio en Medellín.</p>
                                <div style={ContactButtonStyles.a} className="pb-3 pt-2">
                                    <a className="btn btn-default btn-white" target="_blank" href={"https://wa.me/573168161717?text=Hola, estoy interesado en maquillaje prenatal en Medellín."}>AGENDAR CITA</a>
                                </div>
                                
                                <p className="about-para" className="pt-3"><strong>Kit de maquillaje prenatal</strong></p>
                                <p className="about-para">Es ideal para pintar la barriguita en compañía de tus familiares y/o amigos en casa.</p>
                                <div style={ContactButtonStyles.a} className="pb-3 pt-2">
                                    <Link href='/kit'><a className="btn btn-default btn-white">MÁS INFORMACIÓN</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default About;