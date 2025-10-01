'use client'
import React from 'react';
import {Container,Row,Col} from 'reactstrap'
import Link from 'next/link'
import IKImage from '@/components/IKImage';
import { buildSrc } from '@imagekit/next';

const HeaderMobile = ({ isKitPage }) => {
    const mobileBgUrl = buildSrc({
        urlEndpoint: 'https://ik.imagekit.io/ge17f66b4ma',
        src: '/slider-bg_mKSrnghgQ.jpg?updatedAt=1758993734731',
        transformation: [{ quality: 60, format: 'webp', width: 800 }]
    });

    return (
        <section className="wedding header" id="header">
            <div className="wedding-content">
                <div
                    className="wedding bg slider-bg"
                    style={{
                        backgroundImage: `url(${mobileBgUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                <Container>
                    <Row>
                        <Col>
                            <div className="d-flex flex-column justify-content-center align-items-center gap-2" style={{ marginTop: '100px' }}>
                                        <div className="m-t-20 text-center">
                                            <h1 className="custom-title bold text-uppercase">
                                                {isKitPage ? 'Kit pintabarriguitas para embarazadas' : 'Maquillaje prenatal'}
                                            </h1>
                                        </div>
                                <h4 className="header-sub-text text-center m-t-20">
                                    {isKitPage
                                        ? 'Incluye todo lo necesario para pintar tu barriguita en familia. Ideal para regalar en baby shower.'
                                        : 'Celebra tu embarazo con arte y disfruta de un momento de relajación, mientras tu bebé es estimulado por el cosquilleo que producen los pinceles.'
                                    }
                                </h4>
                                {!isKitPage && (
                                    <div style={{ width: '100%', maxWidth: '250px' }} className="m-t-20">
                                        <a className="btn btn-default btn-white whatsapp-local w-100" target="_blank" href={"https://wa.me/573168161717?text=Hola, estoy interesado en maquillaje prenatal en Medellín."}>Maquillaje Medellín</a>
                                    </div>
                                )}
                                <div style={{ width: '100%', maxWidth: '250px' }} className={isKitPage ? "m-t-20" : ''  }>
                                    {isKitPage ? (
                                        <a className="btn btn-default btn-white purchase-kit w-100" target="_blank" href="https://checkout.wompi.co/l/tIZLKf">Comprar</a>
                                    ) : (
                                        <Link href='/kit' className="btn btn-default btn-white purchase-kit w-100">Kit de Maquillaje</Link>
                                    )}
                                </div>
                                <div className="bottom-0 girl m-t-25">
                                    <IKImage
                                        src="/Samy_QLzwZtT-Tg.png?updatedAt=1626907765924"
                                        alt="Maquillaje prenatal"
                                        width={714}
                                        height={720}
                                        className="img-fluid"
                                        id="girl"
                                        loading="eager"
                                        transformation={[{ quality: 85, format: 'webp' }]}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
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

export default HeaderMobile;
