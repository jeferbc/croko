import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
import CardGridWrapper from '@/containers/blog/card/grid-wrapper';
import { BlogsData } from '@/database/blog/database';
import SectionTitle from '@/components/SectionTitle';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};

const PopularPosts = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [mobilePost, setMobilePosts] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Get posts for mobile view
        const getMobilePosts = () => {
            // Always include "Qué Regalarle a una Embarazada"
            const featuredPost = BlogsData.find(post =>
                post.slug === 'que-regalar-embarazada-ideas-significativas'
            );

            // Get other posts excluding the featured one
            const otherPosts = BlogsData.filter(post =>
                post.slug !== 'que-regalar-embarazada-ideas-significativas'
            );

            // Shuffle and get 2 random posts
            const shuffled = [...otherPosts].sort(() => 0.5 - Math.random());
            const randomPosts = shuffled.slice(0, 2);

            // Combine: featured post first, then 2 random
            return featuredPost ? [featuredPost, ...randomPosts] : randomPosts;
        };

        handleResize();
        setMobilePosts(getMobilePosts());

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="wedding blog blog-sec">
            <Container>
                <Row>
                    <Col md="8" className="offset-md-2">
                        <SectionTitle title="Publicaciones Recientes" />
                    </Col>
                </Row>
            </Container>

            {isMobile ? (
                // Mobile view: Fixed 3 posts in column
                <Container>
                    <Row>
                        {mobilePost.map((post) => (
                            <Col xs="12" key={post.id} className="mb-4">
                                <CardGridWrapper
                                    className=""
                                    image={post.image}
                                    blogDate={post.createdAt}
                                    place={post.place}
                                    title={post.title}
                                    description={post.description}
                                    readUrl={post.readUrl}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            ) : (
                // Desktop view: Carousel
                <Container fluid={true}>
                    <Row>
                        <Col xs="12">
                            <Slider className="owl-carousel owl-theme blog-posts-carousel" {...settings}>
                                {BlogsData.map((post) => (
                                    <div className="item" key={post.id}>
                                        <CardGridWrapper
                                            className="px-2"
                                            image={post.image}
                                            blogDate={post.createdAt}
                                            place={post.place}
                                            title={post.title}
                                            description={post.description}
                                            readUrl={post.readUrl}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            )}
        </section>
    );
};

export default PopularPosts;
