'use client'
import React, { Fragment } from 'react';
import { AllImgData } from './database';
import {Container,Row,Col} from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

const Basic = ({ className, title, subTitle, fluid }) => {
    return (
        <Fragment>
            <section className="portfolio-section fullwidth-portfolio masonray-sec zoom-gallery titles">
                <Container>
                    <Row>
                        <Col md="8"  className="offset-md-2 wedding">
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
                <div className={fluid || 'container'}>
                    <Gallery>
                        {AllImgData.map((imgItem, i) => (
                            <div className={className} key={i}>
                                <div className="overlay">
                                    <div className="border-portfolio">
                                        <Item
                                            original={imgItem.img}
                                            thumbnail={imgItem.img}
                                            width="1024"
                                            height="768"
                                        >
                                            {({ ref, open }) => (
                                                <div className="zoom_gallery" ref={ref} onClick={open}>
                                                    <div className="overlay-background">
                                                        <i aria-hidden="true" className="fa fa-plus"></i>
                                                    </div>
                                                    <img alt="" className="img-fluid blur-up lazyload"
                                                        src={imgItem.img} />
                                                </div>
                                            )}
                                        </Item>
                                    </div>
                                </div>
                                {title &&
                                    <div className="portfolio-text">
                                        <h3 className="head-text">{title}</h3>
                                        <h6 className="head-sub-text">{subTitle}</h6>
                                    </div>
                                }
                            </div>
                        ))}
                    </Gallery>
                </div>
            </section>
        </Fragment>
    );
};

export default Basic;