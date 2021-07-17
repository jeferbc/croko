import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Container, Row, Col } from 'reactstrap'
import './accordion.css'
const AccordionElementSection = () => {
    const DummyContent1 = () => (
        <div className="collapse show" data-parent="#accordionoc">
            <div className="card-body">
                El maquillaje prenatal consiste en realizar una moderna y divertida obra de arte en la piel del vientre de las embarazadas,
                con el diseño que la madre elija, brindándole el asesoramiento personal que se ajuste a sus gustos y colores.
            </div>
        </div>
    );
    const DummyContent2 = () => (
        <div className="collapse show" data-parent="#accordionoc">
            <div className="card-body">
            Se aconseja realizarlo a partir de la semana 28, pero lo más importante es que sea en el momento en que la mami tenga la barriga grande y se sienta cómoda con ella. Sin embargo, es algo muy personal y depende del momento en que cada una se sienta segura y con ganas de pintarse. 
            </div>
        </div>
    );
    const DummyContent3 = () => (
        <div className="collapse show" data-parent="#accordionoc">
            <div className="card-body">
            La sesión puede durar entre una y tres horas (normalmente 2 horas), aunque todo depende del diseño que la mami escoja; si quiere que la obra tenga fondo pintado, o que solo sea un dibujo sencillo, si requiere de muchos colores, retoques y fondo.
            Pero el tiempo pasa a ser un factor secundario, ya que es un momento muy agradable, donde los pinceles hacen un masaje al vientre y es relajante, no sólo para la embarazada, sino también para el pequeño que está dentro y que cada tanto se mueve, generando momentos de mucha ternura. 
            </div>
        </div>
    );
    const DummyContent4 = () => (
        <div className="collapse show" data-parent="#accordionoc">
            <div className="card-body">
            Utilizo pinturas inocuas corporales especializadas, fabricadas con ingredientes vegetales, ceras y minerales de alta pureza, hipoalergénicas, sin perfume, con certificación Ecocert y que no son tóxicas para tu bebé. Al ser productos a base de agua son muy fáciles de remover, aplicando suavemente jabón y agua, mientras te duchas o también puedes utilizar toallitas húmedas.
            </div>
        </div>
    );
    const DummyContent5 = () => (
        <div className="collapse show" data-parent="#accordionoc">
            <div className="card-body">
            Generalmente se realiza en la casa de la embarazada para que esté cómoda (plan básico). O en el estudio ubicado cerca a la estación Envigado del metro de Medellín (plan económico). Además ofrecemos, de forma opcional, el servicio de fotografía profesional (plan integrado).
            </div>
        </div>
    );
    const DummyContent6 = () => (
        <div className="collapse show" data-parent="#accordionoc">
            <div className="card-body">
            Normalmente recomiendo a las mamis que se tomen el tiempo de investigar en Internet dibujos o diseños acordes al gusto personal. Por lo general yo utilizo Google o Pinterest, ya que son dos plataformas muy buenas para encontrar imágenes. Lo ideal es buscar allí palabras clave, como por ejemplo: “dibujos de bebés”; “imágenes de películas de Disney”; “ideas para Belly Painting”, etc., escoger varias y guardarlas. Y así finalmente poder elegir entre varias la que más te guste.
            También el diseño puede ser personalizado. Me puedes decir cuál es tu idea, y entre las dos darle forma al concepto que tienes en mente. 
            ¡Este es un momento único que quedará grabado para siempre en el tiempo!
            </div>
        </div>
    );
    const DummyContent7 = () => (
        <div className="collapse show" data-parent="#accordionoc">
            <div className="card-body">
            Claro que sí, pueden estar los que deseen acompañar a la futura y madre. Además tienen la posibilidad de participar en el proceso del maquillaje si así lo desean y pasar un momento inolvidable juntos.
            </div>
        </div>
    );
    const DummyContent8 = () => (
        <div className="collapse show" data-parent="#accordionoc">
            <div className="card-body">
            Es necesario que estés cómoda en todo momento mientras te estás haciendo el maquillaje prenatal. Un top o una camiseta suelta y unos leggins están bien.
            </div>
        </div>
    );
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
                        <section className="saas1 faq mt-0">
                            <div className="faq-block">
                                <div>
                                    <Accordion atomic={true}>
                                        <AccordionItem className="card-header bg-primary" title="¿QUÉ ES EL MAQUILLAJE PRENATAL (BELLY PAINTING)?">
                                            <DummyContent1 className="active" />
                                        </AccordionItem>
                                        <AccordionItem className="card-header bg-primary" title="¿CUÁNDO SE ACONSEJA PINTARSE LA BARRIGA?">
                                            <DummyContent2 />
                                        </AccordionItem>
                                        <AccordionItem className="card-header bg-primary" title="¿CUÁNTO DURA LA SESIÓN?">
                                            <DummyContent3 />
                                        </AccordionItem>
                                        <AccordionItem className="card-header bg-primary" title="¿QUÉ MATERIALES SE UTILIZAN PARA LA SESIÓN DE MAQUILLAJE PRENATAL?">
                                            <DummyContent4 />
                                        </AccordionItem>
                                        <AccordionItem className="card-header bg-primary" title="¿DÓNDE SE REALIZA LA SESIÓN?">
                                            <DummyContent5 />
                                        </AccordionItem>
                                        <AccordionItem className="card-header bg-primary" title="¿QUÉ DISEÑO PUEDO ELEGIR PARA PINTARME LA BARRIGA?">
                                            <DummyContent6 />
                                        </AccordionItem>
                                        <AccordionItem className="card-header bg-primary" title="¿PUEDE HABER ACOMPAÑANTES DURANTE LA SESIÓN?">
                                            <DummyContent7 />
                                        </AccordionItem>
                                        <AccordionItem className="card-header bg-primary" title="RECOMENDACIONES">
                                            <DummyContent8 />
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AccordionElementSection;