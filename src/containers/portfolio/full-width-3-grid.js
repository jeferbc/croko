'use client'
import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'
import Masonry from 'react-masonry-css'
import Slider from 'react-slick'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import { AllImgData } from './database';
import IKImage from '@/components/IKImage';
import SectionTitle from '@/components/SectionTitle';

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    dotsClass: 'slick-dots slick-dots-bottom',
    appendDots: dots => (
        <div style={{
            position: 'relative',
            bottom: '20px',
            padding: '20px 0'
        }}>
            <ul style={{
                margin: '0px',
                padding: '0',
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                listStyle: 'none'
            }}>
                {dots.map((dot, index) => (
                    <li key={index} style={{ margin: '0' }}>
                        {React.cloneElement(dot.props.children, {
                            style: {
                                background: dot.props.className.includes('slick-active') ? '#d4af37' : '#ccc',
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '0'
                            }
                        })}
                    </li>
                ))}
            </ul>
        </div>
    )
};

const FullWidth3Grid = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const breakpointColumnsObj = {
        default: 3,
        991: 2,
        767: 1
    };

    // PhotoSwipe gallery options
    const galleryOptions = {
        padding: isMobile ? { top: 20, bottom: 20, left: 0, right: 0 } : { top: 40, bottom: 40, left: 100, right: 100 },
        bgOpacity: 0.9,
        showHideOpacity: true,
        maxWidthToAnimate: 800,
    };

    // Extract path from full ImageKit URL
    const extractPath = (url) => {
        const urlEndpoint = 'https://ik.imagekit.io/ge17f66b4ma';
        return url.replace(urlEndpoint, '');
    };

    return (
        <Fragment>
            <section className="wedding portfolio-section zoom-gallery" id='galery'>
                <Container>
                    <Row>
                        <Col md="8" className="offset-md-2">
                            <SectionTitle title="Galería" />
                        </Col>
                    </Row>
                </Container>
                {isMobile ? (
                    <Container fluid={true}>
                        <Row>
                            <Col xs="12">
                                <Gallery options={galleryOptions}>
                                    <Slider className="owl-carousel owl-theme" id="gallery-slider" {...sliderSettings}>
                                        {AllImgData.map((imgItem, i) => (
                                            <div className="item" key={i}>
                                                <div className="gallery-item px-3">
                                                    <Item
                                                        original={imgItem.img}
                                                        thumbnail={imgItem.img}
                                                        width="960"
                                                        height="980"
                                                    >
                                                        {({ ref, open }) => (
                                                            <div
                                                                ref={ref}
                                                                onClick={open}
                                                                style={{ cursor: 'pointer', position: 'relative' }}
                                                            >
                                                                <IKImage
                                                                    src={extractPath(imgItem.img)}
                                                                    alt="Maquillaje prenatal"
                                                                    width={400}
                                                                    height={300}
                                                                    className="img-fluid"
                                                                    loading="lazy"
                                                                    transformation={[{
                                                                        width: 400,
                                                                        height: 300,
                                                                        quality: 85,
                                                                        format: 'auto'
                                                                    }]}
                                                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                                                />
                                                            </div>
                                                        )}
                                                    </Item>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </Gallery>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    <div className="container-fluid">
                        <Gallery options={galleryOptions}>
                            <Masonry
                                breakpointCols={breakpointColumnsObj}
                                className="my-masonry-grid row m-0"
                                columnClassName="my-masonry-grid_column col-lg-4 col-md-6 col-12 p-0"
                            >
                                {AllImgData.map((imgItem, i) => (
                                    <div className="isotopeSelector m-0 p-0" key={i}>
                                        <div className="overlay">
                                            <div className="border-portfolio">
                                                <Item
                                                    original={imgItem.img}
                                                    thumbnail={imgItem.img}
                                                    width="960"
                                                    height="980"
                                                >
                                                    {({ ref, open }) => (
                                                        <div className="zoom_gallery" ref={ref} onClick={open} style={{ cursor: 'pointer' }}>
                                                            <div className="overlay-background">
                                                                <i aria-hidden="true" className="fa fa-plus"></i>
                                                            </div>
                                                            <IKImage
                                                                src={extractPath(imgItem.img)}
                                                                alt="Maquillaje prenatal"
                                                                width={400}
                                                                height={300}
                                                                className="img-fluid blur-up lazyloaded"
                                                                loading="lazy"
                                                                transformation={[{
                                                                    width: 400,
                                                                    height: 300,
                                                                    quality: 85,
                                                                    format: 'auto'
                                                                }]}
                                                                style={{ width: '100%', height: 'auto' }}
                                                            />
                                                        </div>
                                                    )}
                                                </Item>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Masonry>
                        </Gallery>
                    </div>
                )}
            </section>
        </Fragment>
    )
}

export default FullWidth3Grid;