'use client'
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap'
import Masonry from 'react-masonry-css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import { AllImgData } from './database';

const FullWidth3Grid = () => {
    const breakpointColumnsObj = {
        default: 3,
        991: 2,
        767: 1
    };

    return (
        <Fragment>
            <section className="wedding portfolio-section zoom-gallery" id='galery'>
                <Container>
                    <Row>
                        <Col md="8" className="offset-md-2">
                            <div className="title">
                                <img alt="" className="img-fluid title-img"
                                    src="/assets/images/wedding-img/bottom.png" />
                                <div className="main-title">
                                    <h2 className="gradient-text">Galería</h2>
                                </div>
                            </div>
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
                                <div className="isotopeSelector" key={i}>
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
                                                        <img alt="" className="img-fluid blur-up lazyloaded"
                                                            src={imgItem.img} />
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