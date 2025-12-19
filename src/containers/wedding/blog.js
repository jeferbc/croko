import React from 'react';
import Slider from 'react-slick';

import { BlogData } from '@/database/layouts/wedding/database'
import {Container,Row,Col} from 'reactstrap'
import SectionTitle from '@/components/SectionTitle'
import IKImage from '@/components/IKImage'

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 1024,
            settings: { slidesToShow: 1 }
        }
    ]
};

const Blog = () => {
    // Extract path from full ImageKit URL
    const extractPath = (url) => {
        const urlEndpoint = 'https://ik.imagekit.io/ge17f66b4ma';
        return url.replace(urlEndpoint, '');
    };

    return (
        <section className="wedding blog" id="testimonials">
            <Container>
                <Row>
                    <Col md="8" className="offset-md-2">
                        <SectionTitle title="Historias" />
                    </Col>
                </Row>
            </Container>
            <Container fluid={true}>
                <div></div>
                <Row>
                    <Col xs="12">
                        <Slider className="owl-carousel owl-theme" id="blog-slider" {...settings}>
                            {BlogData.map((item, i) => {
                                return (
                                    <div className="item" key={i}>
                                        <div className="blog-container">
                                            <Row>
                                                <Col md="6" sm="8" xs="12"  className="offset-sm-2 offset-md-0">
                                                    <div className="set-skew">
                                                        <IKImage
                                                            src={extractPath(item.img)}
                                                            alt={item.title || "Historia"}
                                                            width={600}
                                                            height={435}
                                                            className="img-fluid"
                                                            loading="lazy"
                                                            transformation={[{
                                                                width: 600,
                                                                quality: 85,
                                                                format: 'auto'
                                                            }]}
                                                            style={{ width: '100%', height: 'auto' }}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col md="6" sm="8" xs="12" className="offset-sm-2 offset-md-0">
                                                    <div className="center-text">
                                                        <div>
                                                            <h3 className="blog-text gradient-text"> {item.title}</h3>
                                                            <div className="blog-date">{item.date}</div>
                                                            <div className="blog-place">{item.place}</div>
                                                            <p className="blog-para">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Blog;