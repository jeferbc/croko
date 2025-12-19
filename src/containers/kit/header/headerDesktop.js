'use client'
import React from 'react';
import {Container,Row,Col} from 'reactstrap'
import Link from 'next/link'
import IKImage from '@/components/IKImage';
import { buildSrc } from '@imagekit/next';

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

const HeaderDesktop = ({ isKitPage }) => {
    const desktopBgUrl = buildSrc({
        urlEndpoint: 'https://ik.imagekit.io/ge17f66b4ma',
        src: '/countdown-bg_pgiKvb7Cv.png?updatedAt=1758993722284',
        transformation: [{ quality: 40, format: 'webp' }]
    });

    return (
        <section className="wedding header" id="header">
            <div className="wedding-content">
                <div
                    className="wedding bg slider-bg"
                    style={{
                        backgroundImage: `url(${desktopBgUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                <div className="bottom-0 set-abs girl">
                    <img
                        src="https://ik.imagekit.io/ge17f66b4ma/family_header_cz4Hj1SWB.png?tr=w-800,q-60,f-webp"
                        alt="Crea recuerdos únicos en familia con belly painting"
                        width={800}
                        height={800}
                        className="img-fluid"
                        id="girl"
                        loading="eager"
                        fetchPriority="high"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
                <Container>
                    <Row>
                        <Col lg="5" className="offset-lg-7">
                            <div className="center-text m-t-50">
                                <div className="simple-text">
                                    <div className="title">
                                        <div className="main-title">
                                            <h1 className="gradient-text" style={isKitPage ? { letterSpacing: '0' } : {}}>
                                                {isKitPage ? 'Crea recuerdos únicos en familia con tu bebé' : 'Maquillaje Prenatal'}
                                            </h1>
                                        </div>
                                    </div>
                                    <p className="header-sub-text text-center" style={ContactButtonStyles.p}>
                                        {isKitPage
                                            ? 'Pinturas seguras + plantillas fáciles + guías paso a paso'
                                            : 'Celebra tu embarazo con arte y disfruta de un momento de relajación, mientras tu bebé es estimulado por el cosquilleo que producen los pinceles.'
                                        }
                                    </p>
                                    {isKitPage && (
                                        <div className="header-trust-badges text-center mt-3 mb-3">
                                            <small className="text-muted">
                                                <span className="me-3">
                                                    <i className="fa fa-clock-o ml-2" style={{ color: '#c0882f' }}></i> Momento ideal: 28-36 semanas
                                                </span>
                                                <span className="me-3">
                                                    <i className="fa fa-heart ml-2" style={{ color: '#c0882f' }}></i> +300 familias felices
                                                </span>
                                                <span className="me-3">
                                                    <i className="fa fa-truck ml-2" style={{ color: '#c0882f' }}></i> Envío gratis
                                                </span>
                                            </small>
                                        </div>
                                    )}
                                    {!isKitPage && (
                                        <div style={ContactButtonStyles.div}>
                                            <a className="btn btn-default btn-white whatsapp-local" target="_blank" href={"https://wa.me/573168161717?text=Hola, estoy interesado en maquillaje prenatal en Medellín."}>Maquillaje Medellín</a>
                                        </div>
                                    )}
                                    <div style={{...ContactButtonStyles.div, marginTop: '25px'}} className='d-none d-lg-flex'>
                                        {isKitPage ? (
                                            <a className="btn btn-default btn-white purchase-kit" target="_blank" href="https://checkout.wompi.co/l/tIZLKf" style={ContactButtonStyles.a}>
                                                Obtener Kit - $150.000
                                            </a>
                                        ) : (
                                            <Link href='/kit-pinta-barriguitas' className="btn btn-default btn-white" style={ContactButtonStyles.a}>
                                                Kit de Maquillaje
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </section>
    );
};

export default HeaderDesktop;
