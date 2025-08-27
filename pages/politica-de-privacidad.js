import React from 'react'
import Head from 'next/head'
import { Container, Row, Col } from 'reactstrap'
import CenterLogoHeader from '../containers/common/center-logo-header'
import FooterSection from './layouts/sections/wedding/footer'

const PoliticaDePrivacidad = () => {
    return (
        <div>
            <Head>
                <title>Política de Privacidad | Maquillajes Embarazadas</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Política de privacidad y tratamiento de datos personales para www.maquillajeembarazadas.com"/>
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <CenterLogoHeader themeClass="wedding"/>

            <section className="inner-page section-b-space" style={{ padding: '200px 0 80px 0' }}>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="blog-details">
                                <h1 className="mb-4">Política de Privacidad</h1>
                                
                                <div className="content">
                                    <p>
                                        <strong>Fecha de última actualización:</strong> {new Date().toLocaleDateString('es-CO')}
                                    </p>

                                    <p>
                                        Carolina Rincón, operador de www.maquillajeembarazadas.com, se compromete a proteger la privacidad de sus usuarios. 
                                        Esta política describe cómo recopilamos, usamos y protegemos su información personal, cumpliendo con la Ley 1581 de 2012 
                                        de Colombia (Ley de Protección de Datos Personales) y normas aplicables.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>1. Información que recopilamos</h3>
                                    <p><strong>Información personal directa:</strong></p>
                                    <ul>
                                        <li>Nombre completo</li>
                                        <li>Número de teléfono</li>
                                        <li>Dirección de correo electrónico</li>
                                        <li>Dirección de entrega</li>
                                        <li>Información de contacto para servicios a domicilio</li>
                                    </ul>

                                    <p><strong>Información automática:</strong></p>
                                    <ul>
                                        <li>Dirección IP</li>
                                        <li>Tipo de navegador y dispositivo</li>
                                        <li>Páginas visitadas y tiempo en el sitio</li>
                                        <li>Cookies técnicas necesarias para el funcionamiento del sitio</li>
                                    </ul>

                                    <p><strong>Importante:</strong> NO recopilamos información médica o relacionada con la salud.</p>

                                    <h3 style={{ marginTop: '40px' }}>2. Finalidad del tratamiento de datos</h3>
                                    <p>Utilizamos su información personal para:</p>
                                    <ul>
                                        <li>Procesar y gestionar pedidos de kits de maquillaje prenatal</li>
                                        <li>Programar y realizar sesiones de arte prenatal</li>
                                        <li>Comunicarnos sobre servicios, cambios en pedidos y soporte</li>
                                        <li>Procesar pagos y gestionar devoluciones</li>
                                        <li>Coordinar entregas con transportadoras</li>
                                        <li>Mejorar nuestros servicios y sitio web</li>
                                        <li>Cumplir obligaciones legales y comerciales</li>
                                    </ul>

                                    <h3 style={{ marginTop: '40px' }}>3. Base legal para el tratamiento</h3>
                                    <p>Procesamos sus datos con base en:</p>
                                    <ul>
                                        <li><strong>Consentimiento:</strong> Al usar nuestro sitio y servicios</li>
                                        <li><strong>Ejecución de contrato:</strong> Para cumplir pedidos y servicios</li>
                                        <li><strong>Interés legítimo:</strong> Para mejorar servicios y comunicación</li>
                                        <li><strong>Obligación legal:</strong> Para cumplir requisitos fiscales y comerciales</li>
                                    </ul>

                                    <h3 style={{ marginTop: '40px' }}>4. Compartir información con terceros</h3>
                                    <p>Compartimos información limitada con:</p>
                                    <ul>
                                        <li><strong>Procesadores de pago:</strong> Wompi para transacciones</li>
                                        <li><strong>Transportadoras:</strong> Interrapidisimo para entregas (solo datos de contacto y dirección)</li>
                                        <li><strong>Autoridades:</strong> Cuando sea requerido legalmente</li>
                                    </ul>
                                    <p>NO vendemos, alquilamos o compartimos datos con terceros para marketing.</p>

                                    <h3 style={{ marginTop: '40px' }}>5. Cookies y tecnologías similares</h3>
                                    <p>Utilizamos cookies para:</p>
                                    <ul>
                                        <li>Funcionamiento técnico del sitio</li>
                                        <li>Recordar preferencias del usuario</li>
                                        <li>Análisis básico de uso del sitio</li>
                                    </ul>
                                    <p>Puede desactivar cookies en su navegador, aunque esto puede afectar la funcionalidad del sitio.</p>

                                    <h3 style={{ marginTop: '40px' }}>6. Seguridad de los datos</h3>
                                    <p>Implementamos medidas técnicas y organizativas para proteger sus datos:</p>
                                    <ul>
                                        <li>Conexiones seguras (HTTPS)</li>
                                        <li>Acceso limitado a información personal</li>
                                        <li>Revisiones regulares de seguridad</li>
                                        <li>Eliminación segura de datos cuando ya no son necesarios</li>
                                    </ul>

                                    <h3 style={{ marginTop: '40px' }}>7. Retención de datos</h3>
                                    <p>Conservamos sus datos personales:</p>
                                    <ul>
                                        <li><strong>Datos de clientes:</strong> 5 años desde la última transacción</li>
                                        <li><strong>Datos fiscales:</strong> Según requisitos legales (5 años)</li>
                                        <li><strong>Cookies técnicas:</strong> Durante la sesión o según configuración</li>
                                    </ul>

                                    <h3 style={{ marginTop: '40px' }}>8. Sus derechos</h3>
                                    <p>Conforme a la Ley 1581 de 2012, usted tiene derecho a:</p>
                                    <ul>
                                        <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre usted</li>
                                        <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                                        <li><strong>Cancelación:</strong> Eliminar sus datos cuando no sean necesarios</li>
                                        <li><strong>Oposición:</strong> Oponerse al uso de sus datos para fines específicos</li>
                                    </ul>
                                    <p>Para ejercer estos derechos, contacte: croko@maquillajeembarazadas.com o +57 3168161717</p>

                                    <h3 style={{ marginTop: '40px' }}>9. Transferencias internacionales</h3>
                                    <p>
                                        Algunos servicios (como procesadores de pago) pueden implicar transferencias de datos fuera de Colombia. 
                                        Nos aseguramos de que estos proveedores cumplan estándares adecuados de protección.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>10. Menores de edad</h3>
                                    <p>
                                        No recopilamos conscientemente datos de menores de 18 años sin supervisión parental. 
                                        Si identifica que hemos recopilado datos de un menor inadecuadamente, contáctenos para eliminarlos.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>11. Cumplimiento con Google y Meta</h3>
                                    <p>
                                        Cumplimos con las políticas de Google Ads y Meta Ads. No recopilamos ni procesamos categorías sensibles 
                                        de datos personales (salud, datos médicos, información sobre embarazo como condición médica).
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>12. Cambios a esta política</h3>
                                    <p>
                                        Podemos actualizar esta política ocasionalmente. Los cambios importantes se notificarán por email 
                                        o mediante aviso en el sitio web. La fecha de última actualización se indica al inicio.
                                    </p>

                                    <h3 style={{ marginTop: '40px' }}>13. Contacto</h3>
                                    <p>
                                        Para preguntas sobre esta política de privacidad o el tratamiento de sus datos personales:
                                    </p>
                                    <ul>
                                        <li><strong>Email:</strong> croko@maquillajeembarazadas.com</li>
                                        <li><strong>Teléfono:</strong> +57 3168161717</li>
                                        <li><strong>Responsable:</strong> Carolina Rincón</li>
                                    </ul>

                                    <h3 style={{ marginTop: '40px' }}>14. Autoridad de control</h3>
                                    <p>
                                        Si considera que el tratamiento de sus datos no es adecuado, puede presentar reclamación ante 
                                        la Superintendencia de Industria y Comercio de Colombia.
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

export default PoliticaDePrivacidad