'use client'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import IKImage from '@/components/IKImage'

const BlogDetail = ({ post }) => {
    const [isDesktop, setIsDesktop] = useState(true)

    useEffect(() => {
        document.body.style.setProperty('--primary', '#c0882f')
        document.body.style.setProperty('--secondary', '#595959')
        document.body.style.setProperty('--light', '#BF862D')

        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Extract path from full ImageKit URL
    const extractPath = (url) => {
        if (!url) return ''
        const urlEndpoint = 'https://ik.imagekit.io/ge17f66b4ma'
        return url.replace(urlEndpoint, '')
    }

    if (!post) {
        return (
            <section className="inner-page section-b-space blog-post-page" style={{marginTop: '120px'}}>
                <Container>
                    <Row>
                        <Col lg="10" className="offset-lg-1">
                            <div className="text-center">
                                <h2>Post no encontrado</h2>
                                <p>Lo sentimos, no pudimos encontrar el artículo que buscas.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }

    return (
        <section className="inner-page section-b-space blog-post-page">
            <Container>
                <Row>
                    <Col lg="10" className="offset-lg-1">
                        <article className="blog-post" style={{marginTop: isDesktop ? '270px' : '80px'}}>
                            <header className="post-header text-center mb-4">
                                <h1 className="post-title gradient-text" style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                                    {post.title}
                                </h1>
                                <div className="post-meta d-flex justify-content-center align-items-center gap-3" style={{ color: '#666', fontSize: '14px' }}>
                                    <span className="post-date">
                                        <i className="fa fa-calendar me-2"></i>
                                        {post.date}
                                    </span>
                                    <span>•</span>
                                    <span className="post-author">
                                        <i className="fa fa-user me-2"></i>
                                        Por {post.author}
                                    </span>
                                </div>
                            </header>

                            <div className="post-image mb-4">
                                <IKImage
                                    src={extractPath(post.image)}
                                    alt={post.title}
                                    width={1600}
                                    height={1161}
                                    className="img-fluid rounded"
                                    loading="eager"
                                    transformation={[{
                                        width: isDesktop ? 800 : 400,
                                        quality: 85,
                                        format: 'auto'
                                    }]}
                                    style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
                                />
                            </div>

                            <div className="post-description mb-4">
                                <p className="lead" style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.6' }}>
                                    {post.description}
                                </p>
                            </div>

                            <div className="blog-divider" style={{ height: '2px', backgroundColor: '#c0882f', margin: '30px 0', width: '80px' }}></div>

                            <div 
                                className="post-content"
                                style={{ 
                                    fontSize: '16px', 
                                    lineHeight: '1.7', 
                                    color: '#333'
                                }}
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            <div className="blog-divider" style={{ height: '1px', backgroundColor: '#e0e0e0', margin: '40px 0' }}></div>
                            
                            <div className="post-footer text-center">
                                <div className="social-share mb-3">
                                    <h6 style={{ color: '#c0882f', marginBottom: '15px' }}>Comparte este artículo:</h6>
                                    <div className="d-flex justify-content-center gap-3">
                                        <a 
                                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-primary btn-sm rounded-circle"
                                            style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                        >
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        <a 
                                            href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-success btn-sm rounded-circle"
                                            style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                        >
                                            <i className="fa fa-whatsapp"></i>
                                        </a>
                                        <a 
                                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-info btn-sm rounded-circle"
                                            style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                        >
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BlogDetail