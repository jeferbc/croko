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
                            <div className="d-flex flex-column justify-content-center align-items-center gap-2" style={{ marginTop: '60px' }}>
                                        <div className="mt-3 text-center">
                                            <h1 className={isKitPage ? "custom-title bold" : "custom-title bold text-uppercase"} style={isKitPage ? { letterSpacing: '0' } : {}}>
                                                {isKitPage ? 'Crea recuerdos únicos en familia con tu bebé' : 'Maquillaje Prenatal'}
                                            </h1>
                                        </div>
                                <h4 className="header-sub-text text-center mt-3">
                                    {isKitPage
                                        ? 'Pinturas seguras + plantillas fáciles + guías paso a paso'
                                        : 'Celebra tu embarazo con arte y disfruta de un momento de relajación, mientras tu bebé es estimulado por el cosquilleo que producen los pinceles.'
                                    }
                                </h4>
                                {isKitPage && (
                                    <div className="header-trust-badges text-center mt-3">
                                        <small style={{ lineHeight: '1.6', color: '#444', display: 'inline-flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.85rem' }}>
                                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                                <i className="fa fa-clock-o" style={{ fontSize: '1rem', color: '#c0882f' }}></i> Momento ideal: 28-36 semanas
                                            </span>
                                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                                <i className="fa fa-heart" style={{ color: '#c0882f', fontSize: '1rem' }}></i> +300 familias felices
                                            </span>
                                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                                <i className="fa fa-truck" style={{ color: '#c0882f', fontSize: '1rem' }}></i> Envío gratis
                                            </span>
                                        </small>
                                    </div>
                                )}
                                {!isKitPage && (
                                    <div style={{ width: '100%', maxWidth: '250px' }} className="m-t-20">
                                        <a className="btn btn-default btn-white whatsapp-local w-100" target="_blank" href={"https://wa.me/573168161717?text=Hola, estoy interesado en maquillaje prenatal en Medellín."}>Maquillaje Medellín</a>
                                    </div>
                                )}
                                <div style={{ width: '100%', maxWidth: '280px', marginTop: isKitPage ? '25px' : '0' }}>
                                    {isKitPage ? (
                                        <a className="btn btn-default btn-white purchase-kit w-100" target="_blank" href="https://checkout.wompi.co/l/tIZLKf">
                                            Obtener Kit<br/>
                                            <small style={{ fontSize: '0.85rem' }}>$150.000</small>
                                        </a>
                                    ) : (
                                        <Link href='/kit-pinta-barriguitas' className="btn btn-default btn-white purchase-kit w-100">Kit de Maquillaje</Link>
                                    )}
                                </div>
                                <div className="bottom-0 girl m-t-25">
                                    <img
                                        src="https://ik.imagekit.io/ge17f66b4ma/header?updatedAt=1765930997534&tr=w-600,c-at_max,f-webp,q-85"
                                        alt="Crea recuerdos únicos en familia con belly painting"
                                        width={600}
                                        height={600}
                                        className="img-fluid"
                                        id="girl"
                                        loading="eager"
                                        fetchPriority="high"
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
