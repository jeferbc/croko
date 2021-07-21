import React, { useState, Fragment } from 'react';
import { AllImgData } from './database';
import {Container,Row,Col} from 'reactstrap'
import Lightbox from 'react-image-lightbox-next';

const AllImg = [
    require('../../public/assets/images/portfolio/Barriguita_1.png'),
    require('../../public/assets/images/portfolio/Barriguita_2.png'),
    require('../../public/assets/images/portfolio/Barriguita_10.png'),
    require('../../public/assets/images/portfolio/Barriguita_4.png'),
    require('../../public/assets/images/portfolio/Barriguita_5.png'),
    require('../../public/assets/images/portfolio/Barriguita_6.png'),
    require('../../public/assets/images/portfolio/Barriguita_7.png'),
    require('../../public/assets/images/portfolio/Barriguita_8.png'),
    require('../../public/assets/images/portfolio/Barriguita_9.png'),
]

const Basic = ({ className, title, subTitle, fluid }) => {
    
    const initilindex = { index: 0 }
    const [photoIndex, setPhotoIndex] = useState(initilindex)

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
                    {AllImgData.map((imgItem, i) => {
                        return (
                            <div className={className} key={i}>
                                <div className="overlay">
                                    <div className="border-portfolio">
                                        <div className="zoom_gallery" data-source={AllImg[photoIndex.index]}
                                            title="">
                                            <div className="overlay-background" onClick={() =>
                                                setPhotoIndex({ ...photoIndex, index: i, isOpen: true })
                                            }>
                                                <i aria-hidden="true" className="fa fa-plus"></i>
                                            </div>
                                            <img alt="" className="img-fluid blur-up lazyload"
                                                src={imgItem.img} />
                                            {photoIndex.isOpen && (
                                                <Lightbox
                                                    mainSrc={AllImg[photoIndex.index]}
                                                    nextSrc={AllImg[(photoIndex.index + 1) % AllImg.length]}
                                                    prevSrc={AllImg[(photoIndex.index + AllImg.length - 1) % AllImg.length]}
                                                    imageTitle={photoIndex.index + 1 + "/" + AllImg.length}
                                                    onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
                                                    onMovePrevRequest={() => setPhotoIndex({...photoIndex , index:(photoIndex.index + AllImg.length - 1) % AllImg.length})}
                                                    onMoveNextRequest={() => setPhotoIndex({...photoIndex , index:(photoIndex.index + 1) % AllImg.length})}
                                                />
                                            )}

                                        </div>
                                    </div>

                                </div>
                                {title &&
                                    <div className="portfolio-text">
                                        <h3 className="head-text">
                                            {title}
                                        </h3>
                                        <h6 className="head-sub-text">
                                            {subTitle}
                                        </h6>
                                    </div>}
                            </div>
                        )
                    })}
                </div>
            </section>
        </Fragment>
    );
};

export default Basic;