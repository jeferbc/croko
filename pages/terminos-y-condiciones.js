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
                                        <strong>Última actualización:</strong> 3 de septiembre de 2025
                                    </p>

                                    <p>
                                        Bienvenido a www.maquillajeembarazadas.com, operado por Carolina Rincón (en adelante, "nosotros", "nuestro" o "la Empresa"). Este sitio ofrece servicios de arte decorativo para mujeres embarazadas como artista pintabarriguitas (sesiones de pintura artística en barrigas) y venta de kits de maquillaje decorativo para mujeres embarazadas, exclusivamente para fines recreativos y familiares. Estos productos y servicios no tienen ninguna relación con servicios médicos, tratamientos de salud, enfermedades, estados de salud concretos, datos de salud ni relaciones proveedor-paciente. Nuestros kits y sesiones son artísticos, no terapéuticos ni médicos, y utilizan pinturas seguras diseñadas solo para entretenimiento. Al usar este sitio, acepta estos términos, conforme a la Ley 1480 de 2011 (Estatuto del Consumidor) de Colombia.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>1. Uso del sitio</h3>
                                    <p>
                                        Para mayores de 18 años o con supervisión parental. Prohibido uso ilegal o no autorizado.
                                        <br />
                                        Podemos suspender o modificar el sitio sin aviso.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>2. Servicios y productos</h3>
                                    <p>
                                        <strong>Servicios:</strong> Sesiones de pintura artística en barrigas, sujetas a programación.
                                        <br />
                                        <strong>Productos:</strong> Kits de maquillaje decorativo para mujeres embarazadas (no médicos ni terapéuticos).
                                        <br />
                                        Precios en COP, sujetos a cambios, IVA incluido si aplica.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>3. Pagos</h3>
                                    <p>
                                        <strong>Métodos:</strong> Wompi (~2.99% + 900 COP por transacción), transferencia bancaria directa a Carolina Rincón.
                                        <br />
                                        <strong>Confirmación de pago:</strong> Pedido confirmado al recibir pago.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>4. Envío y entrega</h3>
                                    <p>
                                        Envío gratis en Colombia para kits.
                                        <br />
                                        <strong>Transportadoras:</strong> Interrapidisimo (1-3 días en ciudades principales; 3-5 días en áreas remotas, supeditados a www.interrapidisimo.com).
                                        <br />
                                        No responsables por retrasos externos.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>5. Devoluciones y retracto</h3>
                                    <p>
                                        <strong>Derecho de retracto:</strong> 5 días hábiles (Ley 1480 de 2011). Contacte a croko@maquillajeembarazadas.com.
                                        <br />
                                        <strong>Tiempos de devolución:</strong> 5-10 días hábiles tras verificación.
                                        <br />
                                        <strong>Costos:</strong> Wompi (cliente paga comisión), kit enviado (cliente asume retorno y envío original ~5,000-10,000 COP), transferencia (solo fletes).
                                        <br />
                                        <strong>Servicios:</strong> No reembolsables tras programación.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>6. Garantías</h3>
                                    <p>
                                        <strong>Productos:</strong> 30 días por defectos (Ley 1480 de 2011). Contacte para inspección.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>7. Propiedad intelectual</h3>
                                    <p>
                                        Contenido propiedad de Carolina Rincón. Prohibida reproducción sin permiso.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>8. Limitación de responsabilidad</h3>
                                    <p>
                                        No responsables por daños indirectos o retrasos por transportadoras.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>9. Uso del Meta Pixel y públicos</h3>
                                    <p>
                                        Usamos el Meta Pixel para medir rendimiento de anuncios (visitas, compras), sin recolectar datos sensibles (salud, finanzas). Nuestros públicos personalizados y similares se basan exclusivamente en interacciones no sensibles (ej., visitas al sitio), cumpliendo con las Condiciones de Herramientas Empresariales de Meta. Excluimos datos de salud o financieros.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>10. Ley aplicable</h3>
                                    <p>
                                        Gobernados por leyes de Colombia. Disputas en Medellín.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>11. Cambios</h3>
                                    <p>
                                        Podemos modificar estos términos. Notificaremos por email.
                                    </p>

                                    <p className="mt-4">
                                        <strong>Contacte a croko@maquillajeembarazadas.com o +57 3168161717.</strong>
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