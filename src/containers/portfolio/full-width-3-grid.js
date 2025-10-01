'use client'
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap'
import Masonry from 'react-masonry-css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import { AllImgData } from './database';
import IKImage from '@/components/IKImage';
import SectionTitle from '@/components/SectionTitle';

const FullWidth3Grid = () => {
    const breakpointColumnsObj = {
        default: 3,
        991: 2,
        767: 1
    };

    // Extract path from full ImageKit URL
    const extractPath = (url) => {
        // Remove the base URL and return just the path with query params
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
                <div className="container-fluid">
                    <Gallery>
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
                                                width="1024"
                                                height="768"
                                            >
                                                {({ ref, open }) => (
                                                    <div className="zoom_gallery" ref={ref} onClick={open} style={{ cursor: 'pointer' }}>
                                                        <div className="overlay-background">
                                                            <i aria-hidden="true" className="fa fa-plus"></i>
                                                        </div>
                                                        <IKImage
                                                            src={extractPath(imgItem.img)}
                                                            alt="Maquillaje prenatal"
                                                            width={800}
                                                            height={600}
                                                            className="img-fluid blur-up lazyloaded"
                                                            loading="lazy"
                                                            transformation={[{ width: 800, quality: 80 }]}
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
            </section>
        </Fragment>
    )
}

export default FullWidth3Grid;