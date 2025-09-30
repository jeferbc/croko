'use client'
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CenterLogoHeader from '@/containers/common/center-logo-header'
import FooterSection from '@/containers/wedding/footer'

export default function PoliticaDePrivacidad() {
    return (
        <div>
            <CenterLogoHeader themeClass="wedding"/>

            <section className="inner-page section-b-space" style={{ padding: '200px 0 80px 0' }}>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="blog-details">
                                <h1 className="mb-4">Política de Privacidad</h1>

                                <div className="content">
                                    <p>
                                        <strong>Última actualización:</strong> 5 de septiembre de 2025
                                    </p>

                                    <p>
                                        Carolina Rincón, operador de www.maquillajeembarazadas.com, se compromete a proteger la privacidad de sus usuarios conforme a la Ley 1581 de 2012 de Colombia y requisitos de Google y Meta. Este sitio ofrece servicios de arte decorativo para mujeres embarazadas (pintura artística en barrigas) y venta de kits de maquillaje decorativo para mujeres embarazadas, exclusivamente para fines recreativos y familiares, sin relación con servicios médicos, tratamientos de salud, enfermedades, datos de salud ni relaciones proveedor-paciente.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>1. Información que recopilamos</h3>
                                    <p>
                                        <strong>Personal:</strong> Nombre, correo, teléfono (+57 3168161717), dirección de envío.
                                        <br />
                                        <strong>Automática:</strong> IP, navegador, páginas visitadas (vía cookies/píxeles).
                                        <br />
                                        <strong>No recolectamos:</strong> Datos médicos, de salud o sensibles, incluyendo información sobre condiciones de embarazo como estado médico.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>2. Finalidad del tratamiento</h3>
                                    <p>
                                        Procesar pedidos, programar sesiones, comunicar soporte, gestionar pagos/devoluciones, coordinar envíos, mejorar el sitio.
                                        <br />
                                        No usamos datos para fines médicos ni terapéuticos.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>3. Uso del Meta Pixel y públicos</h3>
                                    <p>
                                        El Meta Pixel mide rendimiento de anuncios (visitas, compras), sin recolectar datos sensibles (salud, finanzas). Cumple con Condiciones de Herramientas Empresariales de Meta. Nuestros públicos personalizados y similares se generan solo con interacciones no sensibles (ej., clics, visitas), excluyendo datos de salud o financieros. Puede optar por no participar en configuraciones de Meta.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>4. Compartir información</h3>
                                    <p>
                                        <strong>Con:</strong> Wompi (pagos), Interrapidisimo (envíos), autoridades (legalmente requerido).
                                        <br />
                                        No vendemos ni compartimos para marketing.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>5. Cookies</h3>
                                    <p>
                                        Usamos cookies para funcionamiento y análisis. Puede desactivarlas en su navegador.{' '}
                                        Para más información detallada sobre nuestro uso de cookies, consulte nuestra{' '}
                                        <a href="/politica-cookies" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                                            Política de Cookies
                                        </a>.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>6. Seguridad</h3>
                                    <p>
                                        Usamos HTTPS, acceso restringido, revisiones regulares.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>7. Retención</h3>
                                    <p>
                                        Clientes: 5 años; fiscales: según ley; cookies: sesión.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>8. Derechos</h3>
                                    <p>
                                        Acceso, rectificación, cancelación, oposición (Ley 1581 de 2012). Contacte a crokolina@gmail.com.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>9. Transferencias internacionales</h3>
                                    <p>
                                        Solo con proveedores seguros (ej., Wompi).
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>10. Menores</h3>
                                    <p>
                                        No recolectamos datos de menores sin consentimiento.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>11. Cambios</h3>
                                    <p>
                                        Actualizaciones notificadas por email o sitio.
                                    </p>

                                    <p className="mt-4">
                                        <strong>Contacte a crokolina@gmail.com o +57 3168161717.</strong>
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
