import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CardGridWrapper from '@/containers/blog/card/grid-wrapper';
import { BlogsData } from '@/database/blog/database';

const PopularPosts = () => {
    // Get the first 6 posts for grid layout
    const popularPosts = BlogsData.slice(0, 6);

    return (
        <section className="wedding blog blog-sec">
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
                <Row>
                    {popularPosts.map((post) => (
                        <CardGridWrapper
                            key={post.id}
                            className="col-lg-4 col-md-6 col-sm-12"
                            image={post.image}
                            blogDate={post.createdAt}
                            place={post.place}
                            title={post.title}
                            description={post.description}
                            readUrl={post.readUrl}
                        />
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default PopularPosts;
