'use client'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import CenterLogoHeader from '@/containers/common/center-logo-header'
import FooterSection from '@/containers/wedding/footer'

export default function PoliticaCookies() {
    const [isDesktop, setIsDesktop] = useState(true)

    useEffect(() => {
        document.body.style.setProperty('--primary', '#c0882f')
        document.body.style.setProperty('--secondary', '#595959')
        document.body.style.setProperty('--light', '#BF862D')

        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div>
            <CenterLogoHeader themeClass="wedding"/>

            <section className="inner-page section-b-space" style={{marginTop: '120px'}}>
                <Container>
                    <Row>
                        <Col lg="10" className="offset-lg-1">
                            <div className="policy-content">
                                <h1 style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '30px', marginTop: isDesktop ? '200px' : '0', textAlign: 'left' }}>
                                    Política de Cookies
                                </h1>

                                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '30px', textAlign: 'center' }}>
                                    <strong>Última actualización: 13 de septiembre de 2025</strong>
                                </p>

                                <div style={{ fontSize: '16px', lineHeight: '1.7', color: '#333' }}>
                                    <p>
                                        Carolina Rincón, operadora de www.maquillajeembarazadas.com, utiliza cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio, que ofrece servicios de arte decorativo para mujeres embarazadas (pintura artística en barrigas) y venta de kits de maquillaje decorativo para mujeres embarazadas, exclusivamente para fines recreativos y familiares. No recolectamos ni procesamos datos sensibles como información de salud, condiciones médicas (incluyendo embarazo como estado de salud), finanzas ni relaciones proveedor-paciente. Esta política cumple con la Ley 1581 de 2012 de Colombia, la Resolución 552 de 2021 de la Superintendencia de Industria y Comercio, y las regulaciones de la Región Europea (GDPR) cuando aplica.
                                    </p>

                                    <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
                                        1. ¿Qué son las cookies?
                                    </h2>
                                    <p>
                                        Las cookies son pequeños archivos de texto almacenados en tu dispositivo que nos permiten recordar tus preferencias, analizar el uso del sitio y optimizar nuestros servicios. No usamos cookies para recolectar datos personales sensibles.
                                    </p>

                                    <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
                                        2. Tipos de cookies que utilizamos
                                    </h2>
                                    <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                        <li style={{ marginBottom: '10px' }}>
                                            <strong>Cookies técnicas necesarias:</strong> Permiten el funcionamiento básico del sitio (ej., navegación entre páginas). No requieren consentimiento.
                                        </li>
                                        <li style={{ marginBottom: '10px' }}>
                                            <strong>Cookies analíticas:</strong> Recolectan datos anónimos sobre cómo usas el sitio (ej., páginas visitadas, tiempo de estancia) para mejorar nuestro contenido. Usamos herramientas como Meta Pixel para este fin, exclusivamente para medir rendimiento de anuncios (visitas, compras) sin datos sensibles.
                                        </li>
                                        <li style={{ marginBottom: '10px' }}>
                                            <strong>Cookies de preferencias:</strong> Recuerdan tus elecciones (ej., idioma) si las configuras.
                                        </li>
                                    </ul>

                                    <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
                                        3. Uso del Meta Pixel
                                    </h2>
                                    <p>
                                        El Meta Pixel utiliza cookies para rastrear interacciones no sensibles en nuestro sitio (ej., clics, visitas a páginas de productos), cumpliendo con las Condiciones de Herramientas Empresariales de Meta. No recolecta ni procesa datos de salud, finanzas ni condiciones médicas. Puedes optar por no participar ajustando las configuraciones de publicidad de Meta.
                                    </p>

                                    <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
                                        4. Consentimiento
                                    </h2>
                                    <p>
                                        Al visitar nuestro sitio, verás una notificación de cookies. Al aceptar, das tu consentimiento para el uso de cookies analíticas y de preferencias. Puedes retirar tu consentimiento en cualquier momento cambiando la configuración de tu navegador o contactándonos.
                                    </p>

                                    <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
                                        5. Gestión de cookies
                                    </h2>
                                    <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                        <li style={{ marginBottom: '10px' }}>
                                            <strong>Desactivar cookies:</strong> Puedes bloquearlas en la configuración de tu navegador (ej., Chrome, Firefox), aunque esto puede afectar la funcionalidad del sitio.
                                        </li>
                                        <li style={{ marginBottom: '10px' }}>
                                            <strong>Eliminar cookies:</strong> Borra las cookies almacenadas a través de las opciones de tu navegador.
                                        </li>
                                    </ul>

                                    <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
                                        6. Retención de datos
                                    </h2>
                                    <p>
                                        Las cookies se almacenan solo durante la sesión (técnicas) o hasta 12 meses (analíticas/preferencias), salvo que las elimines antes.
                                    </p>

                                    <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
                                        7. Cambios a esta política
                                    </h2>
                                    <p>
                                        Podemos actualizar esta política. Notificaremos cambios por email o en el sitio.
                                    </p>

                                    <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
                                        8. Contacto
                                    </h2>
                                    <p>
                                        Para preguntas sobre esta política o el uso de cookies, contacta a crokolina@gmail.com o +57 3168161717.
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
