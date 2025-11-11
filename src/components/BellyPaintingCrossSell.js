'use client'
import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import IKImage from './IKImage'
import Link from 'next/link'

const BellyPaintingCrossSell = () => {
    const images = [
        {
            src: '/Baby%20Shower_MJUJtaw9H-.png?updatedAt=1759435406399',
            alt: 'Familia pintando barriga en baby shower',
            width: 1200,
            height: 900
        },
        {
            src: '/Hermanitos_pintando%20(1)_zSIvHSy0K.webp?updatedAt=1757785105897',
            alt: 'Niño pintando la barriga de su mamá embarazada',
            width: 1200,
            height: 900
        },
        {
            src: '/regalar%20a%20una%20embarazada_ZjRm7PCTc.png?updatedAt=1759434621504',
            alt: 'Regalo perfecto para embarazada - Belly painting',
            width: 1200,
            height: 900
        },
        {
            src: '/Barriguita_1_a73AVJNsNm.png?updatedAt=1626907768363',
            alt: 'Barriga pintada con diseño artístico',
            width: 1200,
            height: 900
        },
        {
            src: '/Barriguita_6_ncdCuSgdYtU.png?updatedAt=1626907770091',
            alt: 'Belly painting con diseño único',
            width: 1200,
            height: 900
        },
        {
            src: '/Kit%20foto%20690x551_2rLNnbXrzh.png?updatedAt=1747372670635',
            alt: 'Kit de maquillaje prenatal DIY con materiales',
            width: 690,
            height: 551
        }
    ]

    return (
        <div className="belly-painting-crosssell" style={{
            background: 'linear-gradient(135deg, #fff8f0 0%, #ffe8d6 100%)',
            padding: '60px 0',
            margin: '60px 0',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(192, 136, 47, 0.1)'
        }}>
            <Container>
                {/* Header Section */}
                <Row className="mb-5">
                    <Col lg="10" className="offset-lg-1 text-center">
                        <div className="section-divider mx-auto mb-4" style={{
                            width: '80px',
                            height: '3px',
                            background: 'linear-gradient(90deg, #c0882f 0%, #d4af37 100%)',
                            borderRadius: '3px'
                        }}></div>

                        <h2 className="gradient-text mb-3" style={{
                            fontSize: '2.2rem',
                            fontWeight: 'bold',
                            color: '#c0882f',
                            lineHeight: '1.3'
                        }}>
                            Del Rostro a la Barriga: Una Experiencia Única
                        </h2>

                        <p className="lead" style={{
                            fontSize: '1.2rem',
                            color: '#555',
                            lineHeight: '1.7',
                            maxWidth: '700px',
                            margin: '0 auto 30px'
                        }}>
                            Mientras cuidas tu rostro con <strong>maquillaje seguro</strong>, también puedes crear
                            arte memorable en tu barriga con <strong>belly painting hipoalergénico</strong>.
                            Una forma única de celebrar tu embarazo y conectar con tu bebé.
                        </p>
                    </Col>
                </Row>

                {/* Gallery Section */}
                <Row className="mb-4">
                    <Col lg="10" className="offset-lg-1">
                        <Gallery>
                            <div className="belly-painting-gallery" style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '20px',
                                marginBottom: '40px'
                            }}>
                                {images.map((image, index) => (
                                    <Item
                                        key={index}
                                        original={`https://ik.imagekit.io/ge17f66b4ma${image.src}`}
                                        thumbnail={`https://ik.imagekit.io/ge17f66b4ma${image.src}`}
                                        width={image.width}
                                        height={image.height}
                                    >
                                        {({ ref, open }) => (
                                            <div
                                                ref={ref}
                                                onClick={open}
                                                style={{
                                                    cursor: 'pointer',
                                                    borderRadius: '15px',
                                                    overflow: 'hidden',
                                                    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
                                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                    position: 'relative'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-5px)'
                                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(192, 136, 47, 0.3)'
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)'
                                                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)'
                                                }}
                                            >
                                                <IKImage
                                                    src={image.src}
                                                    alt={image.alt}
                                                    width={image.width}
                                                    height={image.height}
                                                    transformation={[{
                                                        width: 400,
                                                        height: 400,
                                                        crop: 'at_max',
                                                        quality: 85,
                                                        format: 'auto'
                                                    }]}
                                                    loading="lazy"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        aspectRatio: '1 / 1'
                                                    }}
                                                />
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    background: 'rgba(192, 136, 47, 0.8)',
                                                    width: '50px',
                                                    height: '50px',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    opacity: 0,
                                                    transition: 'opacity 0.3s ease',
                                                    pointerEvents: 'none'
                                                }}
                                                className="gallery-hover-icon"
                                                >
                                                    <i className="fa fa-search-plus" style={{ color: 'white', fontSize: '20px' }}></i>
                                                </div>
                                            </div>
                                        )}
                                    </Item>
                                ))}
                            </div>
                        </Gallery>
                    </Col>
                </Row>

                {/* Benefits Section */}
                <Row className="mb-4">
                    <Col lg="10" className="offset-lg-1">
                        <Row>
                            <Col md="6" className="mb-3">
                                <div className="benefit-item d-flex align-items-start" style={{ padding: '15px' }}>
                                    <div style={{
                                        backgroundColor: '#c0882f',
                                        color: 'white',
                                        width: '45px',
                                        height: '45px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '15px',
                                        flexShrink: 0
                                    }}>
                                        <i className="fa fa-shield" style={{ fontSize: '20px' }}></i>
                                    </div>
                                    <div>
                                        <h5 style={{ color: '#c0882f', marginBottom: '5px', fontSize: '1.1rem' }}>
                                            100% Seguro e Hipoalergénico
                                        </h5>
                                        <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: 0 }}>
                                            Pinturas corporales profesionales seguras para la piel de embarazadas
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" className="mb-3">
                                <div className="benefit-item d-flex align-items-start" style={{ padding: '15px' }}>
                                    <div style={{
                                        backgroundColor: '#c0882f',
                                        color: 'white',
                                        width: '45px',
                                        height: '45px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '15px',
                                        flexShrink: 0
                                    }}>
                                        <i className="fa fa-users" style={{ fontSize: '20px' }}></i>
                                    </div>
                                    <div>
                                        <h5 style={{ color: '#c0882f', marginBottom: '5px', fontSize: '1.1rem' }}>
                                            Primer Momento en Familia con el Bebé
                                        </h5>
                                        <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: 0 }}>
                                            El primer espacio donde toda la familia comparte con el bebé antes de nacer
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" className="mb-3">
                                <div className="benefit-item d-flex align-items-start" style={{ padding: '15px' }}>
                                    <div style={{
                                        backgroundColor: '#c0882f',
                                        color: 'white',
                                        width: '45px',
                                        height: '45px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '15px',
                                        flexShrink: 0
                                    }}>
                                        <i className="fa fa-paint-brush" style={{ fontSize: '20px' }}></i>
                                    </div>
                                    <div>
                                        <h5 style={{ color: '#c0882f', marginBottom: '5px', fontSize: '1.1rem' }}>
                                            Sin Experiencia Necesaria
                                        </h5>
                                        <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: 0 }}>
                                            Incluye plantillas y tutoriales para resultados profesionales
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" className="mb-3">
                                <div className="benefit-item d-flex align-items-start" style={{ padding: '15px' }}>
                                    <div style={{
                                        backgroundColor: '#c0882f',
                                        color: 'white',
                                        width: '45px',
                                        height: '45px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '15px',
                                        flexShrink: 0
                                    }}>
                                        <i className="fa fa-camera" style={{ fontSize: '20px' }}></i>
                                    </div>
                                    <div>
                                        <h5 style={{ color: '#c0882f', marginBottom: '5px', fontSize: '1.1rem' }}>
                                            Recuerdos Inolvidables
                                        </h5>
                                        <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: 0 }}>
                                            Crea momentos únicos que atesorarás por siempre
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* CTA Section */}
                <Row>
                    <Col lg="10" className="offset-lg-1 text-center">
                        <Link href="/kit" style={{ textDecoration: 'none' }}>
                            <Button
                                size="lg"
                                style={{
                                    background: 'linear-gradient(135deg, #c0882f 0%, #d4af37 100%)',
                                    border: 'none',
                                    padding: '18px 50px',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    borderRadius: '50px',
                                    boxShadow: '0 8px 25px rgba(192, 136, 47, 0.4)',
                                    transition: 'all 0.3s ease',
                                    textTransform: 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-3px)'
                                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(192, 136, 47, 0.5)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)'
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(192, 136, 47, 0.4)'
                                }}
                            >
                                Descubre el Kit de Belly Painting
                                <i className="fa fa-arrow-right ms-3"></i>
                            </Button>
                        </Link>

                        <p style={{
                            marginTop: '20px',
                            color: '#777',
                            fontSize: '0.95rem'
                        }}>
                            <i className="fa fa-shipping-fast me-2" style={{ color: '#c0882f' }}></i>
                            Envío a toda Colombia • Compra 100% segura
                        </p>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
                .gallery-hover-icon {
                    opacity: 0;
                }
                .belly-painting-gallery > div:hover .gallery-hover-icon {
                    opacity: 1 !important;
                }

                @media (max-width: 768px) {
                    .belly-painting-gallery {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 15px !important;
                    }
                }

                @media (max-width: 480px) {
                    .belly-painting-gallery {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    )
}

export default BellyPaintingCrossSell
