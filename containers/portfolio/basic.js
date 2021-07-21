import React, { useState, Fragment } from 'react';
import { AllImgData } from './database';
import {Container,Row,Col} from 'reactstrap'
import Lightbox from 'react-image-lightbox-next';

const AllImg = [
    'https://ik.imagekit.io/ge17f66b4ma/Barriguita_1_a73AVJNsNm.png?updatedAt=1626907768363',
    'https://ik.imagekit.io/ge17f66b4ma/Barriguita_2_ZVL4uCUsy.png?updatedAt=1626907769236',
    'https://ik.imagekit.io/ge17f66b4ma/Barriguita_10_ljttLG6nNXm.png?updatedAt=1626907770449',
    'https://ik.imagekit.io/ge17f66b4ma/Barriguita_4_f2jnXxI7uf.png?updatedAt=1626907770006',
    'https://ik.imagekit.io/ge17f66b4ma/Barriguita_5_qPbA8g_Sww.png?updatedAt=1626907769334',
    'https://ik.imagekit.io/ge17f66b4ma/Barriguita_6_ncdCuSgdYtU.png?updatedAt=1626907770091',
    'https://ik.imagekit.io/ge17f66b4ma/Barriguita_7_i0EGVHqIJS.png?updatedAt=1626907770304',
    'https://ik.imagekit.io/ge17f66b4ma/Barriguita_8_m5K71KswITQ.png?updatedAt=1626907770750',
    'https://ik.imagekit.io/ge17f66b4ma/Barriguita_9_gYtEzqEu3.png?updatedAt=1626907770164'
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