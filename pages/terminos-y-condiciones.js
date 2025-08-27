import React from 'react'
import Head from 'next/head'
import { Container, Row, Col } from 'reactstrap'
import CenterLogoHeader from '../containers/common/center-logo-header'
import FooterSection from './layouts/sections/wedding/footer'

const TerminosYCondiciones = () => {
    return (
        <div>
            <Head>
                <title>Términos y Condiciones | Maquillajes Embarazadas</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Términos y condiciones de uso para www.maquillajeembarazadas.com"/>
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <CenterLogoHeader themeClass="wedding"/>

            <section className="inner-page section-b-space" style={{ padding: '200px 0 80px 0' }}>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="blog-details">
                                <h1 className="mb-4">Términos y Condiciones</h1>
                                
                                <div className="content">
                                    <p>
                                        Bienvenido a www.maquillajeembarazadas.com, operado por Carolina Rincón (en adelante, "nosotros", "nuestro" o "la Empresa"). 
                                        Este sitio ofrece servicios de arte prenatal como artista pintabarriguitas (sesiones de pintura de barriguitas) y la venta de 
                                        kits de maquillaje prenatal en casa, los cuales no tienen relación con enfermedades, estados de salud concretos o relaciones 
                                        proveedor-paciente. No proporcionamos productos ni servicios médicos; nuestros kits son para entretenimiento y arte familiar, 
                                        utilizando pinturas seguras pero no terapéuticas ni médicas. Al usar este sitio, acepta estos términos y condiciones, 
                                        cumpliendo con la ley colombiana (Ley 1480 de 2011 - Estatuto del Consumidor, y normas aplicables).
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>1. Uso del sitio</h3>
                                    <p>
                                        El sitio es para mayores de 18 años o con supervisión parental. Prohibimos uso ilegal, fraudulento o no autorizado.
                                        No garantizamos disponibilidad continua o libre de errores. Nos reservamos el derecho a modificar o suspender el sitio sin aviso.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>2. Servicios y productos</h3>
                                    <p>
                                        <strong>Servicios:</strong> Sesiones de arte prenatal como artista pintabarriguitas, con diseños personalizados. Disponibilidad sujeta a programación.
                                        <br />
                                        <strong>Productos:</strong> Kits de maquillaje prenatal (incluyendo pinturas seguras pero no médicas).
                                        <br />
                                        Precios en COP, sujetos a cambios. IVA incluido si aplica.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>3. Pagos</h3>
                                    <p>
                                        <strong>Métodos:</strong> Wompi (tarifas ~2.99% + 900 COP por transacción, según términos de Wompi), transferencia bancaria directa a Carolina Rincón, u otros indicados.
                                        <br />
                                        <strong>Confirmación de pago:</strong> Pedido confirmado al recibir pago.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>4. Envío y entrega</h3>
                                    <p>
                                        Envío gratis en Colombia para kits de maquillaje prenatal.
                                        <br />
                                        <strong>Transportadoras:</strong> Interrapidisimo u otras similares. Tiempos de entrega: 1-3 días hábiles en ciudades principales; 3-5 días en áreas remotas (supeditados a términos y condiciones de Interrapidisimo, disponibles en www.interrapidisimo.com, incluyendo retrasos por fuerza mayor).
                                        <br />
                                        Estamos supeditados a los términos de la transportadora; no somos responsables por retrasos externos (clima, logística).
                                        <br />
                                        <strong>Envío internacional:</strong> No disponible.
                                        <br />
                                        <strong>Confirmación de entrega:</strong> Notificada por transportadora.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>5. Devoluciones y retracto</h3>
                                    <p>
                                        <strong>Derecho de retracto:</strong> Según Ley 1480 de 2011 (Estatuto del Consumidor), en ventas no presenciales (ej., kits de maquillaje prenatal), el cliente tiene 5 días hábiles para retractarse desde la entrega, sin penalidad.
                                        <br />
                                        <strong>Procedimiento:</strong> Contacte a croko@maquillajeembarazadas.com o +57 3168161717 con prueba de compra y motivo. Verificamos en 2-5 días hábiles.
                                        <br />
                                        <strong>Tiempos de devolución:</strong> 5-10 días hábiles desde aprobación, tras recepción del producto en perfecto estado (sin uso).
                                        <br />
                                        <strong>Costos:</strong>
                                    </p>
                                    <ul>
                                        <li>Si usa Wompi, comisión por transacción (~2.99% + 900 COP) corre por cuenta del cliente en devolución.</li>
                                        <li>Si el kit fue enviado (pago de envío realizado por nosotros, gratis), el cliente asume costos de retorno y envío original (para evitar pérdidas; el envío original ~5,000-10,000 COP, según destino).</li>
                                        <li>Si pago por transferencia bancaria directa a Carolina Rincón, se cobra solo el valor de los fletes, no el pago principal en devolución.</li>
                                    </ul>
                                    <p>
                                        <strong>Servicios (arte prenatal):</strong> No reembolsables una vez programados o iniciados (cancelación con 48 horas de antelación).
                                        <br />
                                        No aplicable retracto si el producto fue usado o dañado por el cliente.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>6. Garantías</h3>
                                    <p>
                                        <strong>Productos:</strong> Garantía legal de 30 días por defectos de fabricación (Ley 1480 de 2011). Contacte para inspección y reemplazo.
                                        <br />
                                        No cubre mal uso, daños por cliente o factores externos.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>7. Propiedad intelectual</h3>
                                    <p>
                                        Contenido del sitio (imágenes, diseños, textos) es propiedad de Carolina Rincón. Prohibida reproducción sin permiso escrito.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>8. Limitación de responsabilidad</h3>
                                    <p>
                                        No responsable por daños indirectos, pérdida de datos o retrasos en envíos por transportadoras.
                                        <br />
                                        Cumplimos con requisitos de Google y Meta; no recolectamos datos relacionados con salud.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>9. Ley aplicable</h3>
                                    <p>
                                        Gobernados por leyes de Colombia (Ley 1480 de 2011, Ley 1581 de 2012). Disputas en Medellín, Colombia.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>10. Cambios</h3>
                                    <p>
                                        Nos reservamos el derecho a modificar estos términos. Notificaremos cambios por email o en el sitio. 
                                        Al continuar usando el sitio, acepta las actualizaciones.
                                    </p>

                                    <p className="mt-4">
                                        <strong>Para preguntas, contacte a croko@maquillajeembarazadas.com o +57 3168161717.</strong>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <FooterSection />
        </div>
    )
}

export default TerminosYCondiciones