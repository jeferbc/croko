import React, { Fragment } from 'react';
import { AllImgData, } from './database';
import {Container,Row,Col} from 'reactstrap'
import Slider from "react-slick";


var settings = {
  dots: true,
  infinite: true,
  speed: 300,
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

const carousel = () => {
    return (
        <Fragment>
            <section className="wedding blog">
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
                <Container fluid={true}>
                  <div></div>
                  <Row>
                      <Col xs="12">
                          <Slider className="owl-carousel owl-theme" {...settings}>
                              {AllImgData.map((imgItem, i) => {
                                  return (
                                      <div className="item" key={i}>
                                          <div className="blog-container">
                                              <Row>
                                                  <Col md="6" sm="8" xs="12"  className="offset-sm-2 offset-md-0">
                                                      <div className="set-skew">
                                                          <img alt="" className="img-fluid" src={imgItem.img} />
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
        </Fragment>
    );
};

export default carousel;