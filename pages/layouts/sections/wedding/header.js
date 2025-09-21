    import React from 'react';
import {Container,Row,Col} from 'reactstrap'
import Link from 'next/link'
import LazyImage from '../../../../components/LazyImage';

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
const HeaderSection = () => (
    <section className="wedding header" id="header">
        <div className="decore d-none d-md-block">
            <LazyImage alt="Top decoration pattern" className="img-fluid" src="/assets/images/wedding-img/backgrounds/top-pattern.png" />
            <LazyImage alt="Bottom decoration pattern" className="img-fluid" src="/assets/images/wedding-img/backgrounds/bottom-pattern.png" />
        </div>
        <div className="wedding-content">
            <div className="wedding bg slider-bg">
                <div className="bottom-0 set-abs girl">
                    <LazyImage alt="Samy - Maquillaje prenatal specialist" className="img-fluid" id="girl" src="https://ik.imagekit.io/ge17f66b4ma/Samy_QLzwZtT-Tg.png?updatedAt=1626907765924" priority={true} />
                </div>
                <Container>
                    <Row>
                        <Col lg="5" className="offset-lg-7">
                            <div className="center-text m-t-50">
                                <div className="simple-text">
                                    <div className="title">
                                        <div className="main-title">
                                            <h1 className="gradient-text">Maquillaje prenatal</h1>
                                        </div>
                                    </div>
                                    <p className="header-sub-text text-center" style={ContactButtonStyles.p}>
                                        Celebra tu embarazo con arte y disfruta de un momento de relajación,
                                        mientras tu bebé es estimulado por el cosquilleo que producen los pinceles.
                                    </p>
                                    <div style={ContactButtonStyles.div}>
                                        <a 
                                          className="btn btn-default btn-white whatsapp-local" 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          href={"https://wa.me/573168161717?text=Hola, estoy interesado en maquillaje prenatal en Medellín."}
                                          aria-label="Contactar por WhatsApp para maquillaje prenatal en Medellín"
                                        >
                                          Maquillaje Medellín
                                        </a>
                                    </div>
                                    <div style={ContactButtonStyles.div} className='d-none d-lg-flex mt-2'>
                                        <Link href='/kit' className="btn btn-default btn-white" style={ContactButtonStyles.a}>Kit de Maquillaje</Link>
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

export default HeaderSection;