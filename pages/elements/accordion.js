import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Container, Row, Col } from 'reactstrap'
import { AccordionData, KitAccordionData } from '../../database/accordion_database'

const AccordionElementSection = (props) => {
    let accordionItems = props.kit ? KitAccordionData : AccordionData
    return (
        <section className="wedding faq mt-0" id='faq'>
            <Container>
                <Row>
                    <Col md="8"  className="offset-md-2">
                        <div className="title">
                            <img alt="" className="img-fluid title-img"
                                src="/assets/images/wedding-img/bottom.png" />
                            <div className="main-title">
                                <h2 className="gradient-text">Preguntas frecuentes</h2>
                            </div>
                        </div>
                    </Col>
                    <Col md="12">
                        <div className="saas1 faq mt-0">
                            <div className="faq-block">
                                <div>
                                    <Accordion atomic={true}>
                                        { accordionItems.map((data, i) => {
                                            return (
                                                <AccordionItem className="card-header bg-primary" title={data.title} key={i}>
                                                    <div className="collapse show" data-parent="#accordionoc">
                                                        <div className="card-body">
                                                            {data.text}
                                                        </div>
                                                    </div>
                                                </AccordionItem>
                                            )
                                        })}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AccordionElementSection;