import React from 'react';
import {Container,Row,Col} from 'reactstrap'
import Link from 'next/link'

const ContactButtonStyles = {
    div: {
        display: "inline-flex",
        width: "100%",
        justifyContent: "center"
    },
    a: {
        padding: "16px 47px"
    },
    p: {
        animation: 'none'
    }
}
const HeaderDesktop = () => (
    <section className="wedding header" id="header">
        <div className="decore">
            <img alt="" className="img-fluid" src="/assets/images/wedding-img/backgrounds/top-pattern.png" />
            <img alt="" className="img-fluid" src="/assets/images/wedding-img/backgrounds/bottom-pattern.png" />
        </div>
        <div className="wedding-content">
            <div className="wedding bg slider-bg">
                <div className="bottom-0 set-abs girl">
                    <img alt="" className="img-fluid" id="girl" src="https://ik.imagekit.io/ge17f66b4ma/Samy_QLzwZtT-Tg.png?updatedAt=1626907765924" />
                </div>
                <Container>
                    <Row>
                        <Col lg="5" className="offset-lg-7">
                            <div className="center-text m-t-50">
                                <div className="simple-text">
                                    <div className="title">
                                        <div className="main-title">
                                            <h2 className="gradient-text">Kit maquillaje para embarazadas</h2>
                                        </div>
                                    </div>
                                    <p className="header-sub-text text-center" style={ContactButtonStyles.p}>
                                        Incluye todo lo necesario para pintar tu barriguita en familia.
                                        Ideal para regalar en baby shower.
                                    </p>
                                    <div style={ContactButtonStyles.div}>
                                        <a className="btn btn-default btn-white whatsapp-local" target="_blank" href={"https://wa.me/573168161717?text=Hola, estoy interesado en maquillaje prenatal en Medellín."}>Maquillaje Medellín</a>
                                    </div>
                                    <div style={ContactButtonStyles.div} className='d-none d-lg-flex mt-2'>
                                        <Link href='/kit'><a className="btn btn-default btn-white" style={ContactButtonStyles.a}>Comprar</a></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </section>
)

export default HeaderDesktop;