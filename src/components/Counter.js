import React from 'react';
import CountUp from 'react-countup';
import { Container, Row, Col } from 'reactstrap';
import '@/assets/scss/counter.scss';

const Counter = ({ data }) => {
    return (
        <section className="wedding counter">
            <Container>
                <Row>
                    {data.map((item, i) => {
                        return (
                            <Col md="3" xs="6" className="counter-container" key={i}>
                                <div className="counters">
                                    {item.img && (
                                        <img
                                            alt={item.title}
                                            className="img-fluid counter-img"
                                            src={item.img}
                                            loading="lazy"
                                        />
                                    )}
                                    {item.icon && (
                                        <div className="counter-icon">
                                            <i className={item.icon}></i>
                                        </div>
                                    )}
                                    {item.count && (
                                        <div className="counter-text">
                                            <div className="count-number">
                                                <h2 className="counts text-center">
                                                    <CountUp end={item.count} />
                                                    {item.suffix && <span>{item.suffix}</span>}
                                                </h2>
                                            </div>
                                            <h6 className="count-desc text-center">{item.title}</h6>
                                        </div>
                                    )}
                                    {!item.count && (
                                        <div className="counter-text">
                                            <h6 className="count-desc text-center">{item.title}</h6>
                                            {item.subtitle && (
                                                <p className="count-subtitle text-center">{item.subtitle}</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Counter;
