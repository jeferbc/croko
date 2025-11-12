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
        transformation: [{ quality: 70, format: 'webp' }]
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
                    <IKImage
                        src="/Samy_QLzwZtT-Tg.png?updatedAt=1626907765924"
                        alt="Maquillaje prenatal"
                        width={714}
                        height={720}
                        className="img-fluid"
                        id="girl"
                        loading="eager"
                        transformation={[{ quality: 85, format: 'webp' }]}
                        style={{ maxWidth: '714px', height: 'auto' }}
                    />
                </div>
                <Container>
                    <Row>
                        <Col lg="5" className="offset-lg-7">
                            <div className="center-text m-t-50">
                                <div className="simple-text">
                                    <div className="title">
                                        <div className="main-title">
                                            <h2 className="gradient-text">
                                                {isKitPage ? 'Kit maquillaje para embarazadas' : 'Maquillaje prenatal'}
                                            </h2>
                                        </div>
                                    </div>
                                    <p className="header-sub-text text-center" style={ContactButtonStyles.p}>
                                        {isKitPage
                                            ? 'Incluye todo lo necesario para pintar tu barriguita en familia. Ideal para regalar en baby shower.'
                                            : 'Celebra tu embarazo con arte y disfruta de un momento de relajación, mientras tu bebé es estimulado por el cosquilleo que producen los pinceles.'
                                        }
                                    </p>
                                    {!isKitPage && (
                                        <div style={ContactButtonStyles.div}>
                                            <a className="btn btn-default btn-white whatsapp-local" target="_blank" href={"https://wa.me/573168161717?text=Hola, estoy interesado en maquillaje prenatal en Medellín."}>Maquillaje Medellín</a>
                                        </div>
                                    )}
                                    <div style={ContactButtonStyles.div} className='d-none d-lg-flex mt-2'>
                                        <Link href='/kit-pinta-barriguitas' className="btn btn-default btn-white" style={ContactButtonStyles.a}>
                                            {isKitPage ? 'Comprar' : 'Kit de Maquillaje'}
                                        </Link>
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
