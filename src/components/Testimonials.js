import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SectionTitle from '@/components/SectionTitle';
import '@/assets/scss/testimonials.scss';

const Testimonials = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const testimonials = [
        {
            id: 1,
            name: "María González",
            location: "Bogotá",
            text: "Fue la experiencia más linda de mi embarazo. Mi esposo y mi hija participaron pintando juntos. Las pinturas son muy seguras y el resultado quedó hermoso. ¡Lo recomiendo 100%!",
            rating: 5,
            verified: true,
            image: null // Placeholder - replace with actual customer photo
        },
        {
            id: 2,
            name: "Laura Martínez",
            location: "Medellín",
            text: "Me lo regalaron en mi baby shower y fue el mejor regalo que recibí. Todos participamos y nos divertimos muchísimo. Las plantillas son muy fáciles de usar, incluso sin experiencia.",
            rating: 5,
            verified: true,
            image: null
        },
        {
            id: 3,
            name: "Carolina Rodríguez",
            location: "Cali",
            text: "Al principio tenía miedo porque pensé que no me iba a quedar bien, pero las instrucciones son súper claras. Quedé enamorada del resultado y tengo fotos hermosas para recordar.",
            rating: 5,
            verified: true,
            image: null
        }
    ];

    const videoTestimonial = {
        videoId: "z0VbSzVD9gA",
        url: "https://www.youtube.com/embed/z0VbSzVD9gA",
        thumbnail: "https://img.youtube.com/vi/z0VbSzVD9gA/maxresdefault.jpg",
        customerName: "Andrea & Familia",
        title: "Nuestra experiencia con el Kit Pinta Barriguitas"
    };

    return (
        <section className="testimonials-section wedding py-5" style={{ backgroundColor: '#fff8f0' }}>
            <Container>
                {/* Section Header */}
                <SectionTitle title="Lo que dicen nuestras familias" />

                {/* Video Testimonial */}
                <Row className="mb-5">
                    <Col lg="6" md="8" className="mx-auto">
                        <div className="video-testimonial-container shadows">
                            <div className="video-wrapper" style={{
                                position: 'relative',
                                paddingBottom: '177.78%', // 9:16 aspect ratio for vertical video
                                height: 0,
                                overflow: 'hidden',
                                maxWidth: '100%',
                                borderRadius: '8px',
                                cursor: isVideoLoaded ? 'default' : 'pointer'
                            }}>
                                {!isVideoLoaded ? (
                                    // Video Facade - Thumbnail + Play Button
                                    <div
                                        className="video-facade"
                                        onClick={() => setIsVideoLoaded(true)}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            backgroundImage: `url(${videoTestimonial.thumbnail})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {/* Play Button Overlay */}
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            backgroundColor: 'rgba(192, 136, 47, 0.95)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                            transition: 'transform 0.2s ease'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        >
                                            <i className="fa fa-play" style={{
                                                fontSize: '32px',
                                                color: '#fff',
                                                marginLeft: '4px' // Optical centering
                                            }}></i>
                                        </div>
                                    </div>
                                ) : (
                                    // Actual YouTube iframe - only loaded after click
                                    <iframe
                                        src={`${videoTestimonial.url}?autoplay=1`}
                                        title={videoTestimonial.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '8px'
                                        }}
                                    ></iframe>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Text Testimonials */}
                <Row>
                    {testimonials.map((testimonial) => (
                        <Col lg="4" md="6" className="mb-4" key={testimonial.id}>
                            <div className="testimonial-card shadows bg-white h-100">
                                <div className="testimonial-rating mb-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="star">⭐</span>
                                    ))}
                                </div>
                                <p className="testimonial-text">
                                    "{testimonial.text}"
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-info">
                                        {testimonial.image && (
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="author-image"
                                            />
                                        )}
                                        <div>
                                            <p className="author-name mb-0">
                                                <strong>{testimonial.name}</strong>
                                            </p>
                                            <p className="author-location text-muted mb-0">
                                                {testimonial.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Call to Action */}
                <Row className="mt-4">
                    <Col lg="12" className="text-center">
                        <p className="social-proof-cta">
                            <strong>¿Lista para crear tu propia experiencia?</strong>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
