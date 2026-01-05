'use client'
import React from 'react';
import {Container,Row,Col} from 'reactstrap'
import Link from 'next/link'

const HeaderMobile = ({ isKitPage }) => {
    return (
        <section className="wedding header" id="header">
            <div className="wedding-content">
                <div
                    className="wedding bg slider-bg"
                    style={{ position: 'relative', backgroundImage: 'none' }}
                >
                {/* Background image as actual img element for LCP optimization */}
                {/* URL must match preload in layout.js exactly */}
                <img
                    src="https://ik.imagekit.io/ge17f66b4ma/tr:q-40,f-webp,w-800/slider-bg_mKSrnghgQ.jpg?updatedAt=1758993734731"
                    alt=""
                    width={800}
                    height={1200}
                    loading="eager"
                    fetchPriority="high"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        zIndex: -1
                    }}
                />
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
                                        : 'Celebra este momento especial con arte y disfruta de una experiencia creativa única, mientras creas recuerdos inolvidables en familia.'
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
                                        <a className="btn btn-default btn-white purchase-kit w-100" target="_blank" href="https://checkout.wompi.co/l/YRIafg">
                                            Obtener Kit<br/>
                                            <small style={{ fontSize: '0.85rem' }}>$150.000</small>
                                        </a>
                                    ) : (
                                        <Link href='/kit-pinta-barriguitas' className="btn btn-default btn-white purchase-kit w-100">Kit de Maquillaje</Link>
                                    )}
                                </div>
                                <div className="bottom-0 girl m-t-25">
                                    <img
                                        srcSet="
                                            https://ik.imagekit.io/ge17f66b4ma/family_header_cz4Hj1SWB.png?tr=w-320,q-75,f-webp 320w,
                                            https://ik.imagekit.io/ge17f66b4ma/family_header_cz4Hj1SWB.png?tr=w-400,q-75,f-webp 400w,
                                            https://ik.imagekit.io/ge17f66b4ma/family_header_cz4Hj1SWB.png?tr=w-600,q-75,f-webp 600w
                                        "
                                        sizes="(max-width: 991px) 100vw, 600px"
                                        src="https://ik.imagekit.io/ge17f66b4ma/family_header_cz4Hj1SWB.png?tr=w-400,q-75,f-webp"
                                        alt="Crea recuerdos únicos en familia con belly painting"
                                        width={400}
                                        height={400}
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
