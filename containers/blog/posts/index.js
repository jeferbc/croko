import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import { BlogsData } from '../../../database/blog/database';

const PopularPosts = ({}) => {
    // Get the first 6 posts for grid layout
    const popularPosts = BlogsData.slice(0, 6);

    return (
        <section className="wedding blog blog-sec" >
            <Container>
                <Row>
                    <Col md="8" className="offset-md-2">
                        <div className="title">
                            <img alt="" className="img-fluid title-img"
                                src="/assets/images/wedding-img/bottom.png" />
                            <div className="main-title">
                                <h2 className="gradient-text">Publicaciones Recientes</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="popular-posts-grid">
                    {popularPosts.map((post, index) => (
                        <Col lg="4" md="6" sm="12" key={post.id} className="popular-post-item mb-4">
                            <div className="popular-post-card">
                                <div className="popular-post-image">
                                    <img alt={post.title} className="img-fluid" src={post.image} />
                                    <div className="post-date-badge">
                                        {post.createdAt}
                                    </div>
                                </div>
                                <div className="popular-post-content">
                                    <Link href={post.readUrl}>
                                        <h3 className="post-title">{post.title}</h3>
                                    </Link>
                                    <p className="post-description">{post.description}</p>
                                    <div className="post-footer">
                                        <Link href={post.readUrl} className="read-more-link">
                                            Leer más
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default PopularPosts;
