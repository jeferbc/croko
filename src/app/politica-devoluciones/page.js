'use client'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'

export default function PoliticaDevoluciones() {
    const [isDesktop, setIsDesktop] = useState(false)
    const [isXl, setIsXl] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768)
            setIsXl(window.innerWidth > 1200)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <section className="inner-page section-b-space" style={{ padding: '120px 0 80px 0' }}>
            <Container>
                <Row>
                    <Col lg="10" className="offset-lg-1">
                        <div className="policy-content">
                            <h1 style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px', paddingTop: isXl ? '120px' : isDesktop ? '60px' : 0 }}>
                                Política de Devoluciones, Cambios y Garantía
                            </h1>

                            <p style={{ fontSize: '1.05rem', color: '#555', marginBottom: '8px' }}>
                                Tu tranquilidad es nuestra prioridad. En Croko queremos que estés 100% satisfecha con tu compra. Aquí te explicamos cómo funcionan las devoluciones, cambios y garantías de nuestros productos.
                            </p>
                            <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '40px' }}>
                                <strong>Última actualización:</strong> Febrero 2026
                            </p>

                            <div style={{ fontSize: '16px', lineHeight: '1.7', color: '#333' }}>

                                <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
                                    ¿Quién es Croko?
                                </h2>
                                <p>
                                    <strong>Nombre comercial:</strong> Croko<br />
                                    <strong>Titular:</strong> Carolina Rincón<br />
                                    <strong>Domicilio:</strong> Medellín, Antioquia, Colombia<br />
                                    <strong>Correo electrónico:</strong> pintabarriguitas@croko.co<br />
                                    <strong>WhatsApp:</strong> +57 316 816 1717
                                </p>
                                <p>
                                    Esta política aplica a todas las compras realizadas a través de nuestro sitio web y se rige por la Ley 1480 de 2011 (Estatuto del Consumidor) y la Ley 2439 de 2024.
                                </p>

                                <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
                                    Derecho de Retracto (Devolución sin motivo)
                                </h2>
                                <p>
                                    Como consumidor, tienes derecho a retractarte de tu compra en línea <strong>sin necesidad de dar ninguna explicación</strong>. Este es tu derecho y lo respetamos completamente.
                                </p>
                                <p><strong>¿Cuánto tiempo tengo?</strong></p>
                                <p>
                                    Tienes <strong>cinco (5) días hábiles</strong> contados a partir del momento en que recibes tu Kit Pinta Barriguita.
                                </p>
                                <p><strong>¿Qué condiciones debe cumplir el producto?</strong></p>
                                <p>Para que podamos procesar tu devolución, el kit debe estar:</p>
                                <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                    <li style={{ marginBottom: '8px' }}><strong>Sin abrir</strong> – El sello de seguridad del empaque debe estar intacto</li>
                                    <li style={{ marginBottom: '8px' }}><strong>Sin uso</strong> – Las pinturas, brochas y plantillas no deben haber sido utilizadas</li>
                                    <li style={{ marginBottom: '8px' }}><strong>Completo</strong> – Todos los componentes del kit deben estar incluidos</li>
                                    <li style={{ marginBottom: '8px' }}><strong>En su empaque original</strong> – Con la caja y materiales de protección originales</li>
                                </ul>
                                <p><strong>¿Cómo solicito la devolución?</strong></p>
                                <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                    <li style={{ marginBottom: '8px' }}>Escríbenos por <strong>WhatsApp al +57 316 816 1717</strong> o al correo <strong>pintabarriguitas@croko.co</strong></li>
                                    <li style={{ marginBottom: '8px' }}>Indícanos tu <strong>número de pedido</strong> y que deseas ejercer tu derecho de retracto</li>
                                    <li style={{ marginBottom: '8px' }}>Te confirmaremos la recepción y te daremos instrucciones para el envío de regreso</li>
                                    <li style={{ marginBottom: '8px' }}>Envía el producto a la dirección que te indiquemos</li>
                                </ol>
                                <p><strong>¿Quién paga el envío de la devolución?</strong></p>
                                <p>Los costos de envío de regreso del producto son asumidos por el comprador.</p>
                                <p><strong>¿Cuándo recibo mi reembolso?</strong></p>
                                <p>
                                    Una vez recibamos el producto y verifiquemos que cumple las condiciones, te reembolsaremos el <strong>100% del precio pagado dentro de los quince (15) días calendario</strong> siguientes, por el mismo medio de pago que utilizaste (Wompi, tarjeta, PSE, Nequi) o por otro medio que acordemos.
                                </p>

                                <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
                                    Garantía Legal (Productos defectuosos)
                                </h2>
                                <p>
                                    Todos nuestros productos cuentan con <strong>garantía legal de un (1) año</strong> a partir de la fecha de entrega, conforme a la Ley 1480 de 2011.
                                </p>
                                <p><strong>¿Qué cubre la garantía?</strong></p>
                                <p>La garantía cubre defectos de calidad o fabricación, por ejemplo:</p>
                                <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                    <li style={{ marginBottom: '8px' }}>Pinturas corporales secas, dañadas o en mal estado al momento de la entrega</li>
                                    <li style={{ marginBottom: '8px' }}>Brochas o pinceles defectuosos o rotos</li>
                                    <li style={{ marginBottom: '8px' }}>Plantillas incompletas, dañadas o que no correspondan a lo solicitado</li>
                                    <li style={{ marginBottom: '8px' }}>Componentes faltantes respecto a lo ofrecido en la descripción del producto</li>
                                    <li style={{ marginBottom: '8px' }}>Empaque deteriorado que haya afectado el contenido del kit</li>
                                </ul>
                                <p><strong>¿Qué puedo solicitar?</strong></p>
                                <p>Ante un producto defectuoso tienes derecho a elegir entre:</p>
                                <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                    <li style={{ marginBottom: '8px' }}><strong>Cambio</strong> por un producto nuevo en las mismas condiciones</li>
                                    <li style={{ marginBottom: '8px' }}><strong>Devolución del dinero</strong> (reembolso completo)</li>
                                </ol>
                                <p><strong>¿Quién paga el envío?</strong></p>
                                <p>En caso de garantía por producto defectuoso, <strong>Croko asume todos los costos de transporte</strong> (tanto el envío del producto defectuoso como el del producto nuevo o reembolso).</p>
                                <p><strong>¿Cómo solicito la garantía?</strong></p>
                                <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                    <li style={{ marginBottom: '8px' }}>Escríbenos por <strong>WhatsApp al +57 316 816 1717</strong> o al correo <strong>pintabarriguitas@croko.co</strong></li>
                                    <li style={{ marginBottom: '8px' }}>Envíanos tu <strong>número de pedido</strong>, una <strong>descripción del defecto</strong> y <strong>fotos claras</strong> del producto</li>
                                    <li style={{ marginBottom: '8px' }}>Evaluaremos tu caso y te responderemos dentro de <strong>tres (3) días hábiles</strong></li>
                                    <li style={{ marginBottom: '8px' }}>Si la garantía procede, coordinaremos la solución que prefieras</li>
                                </ol>
                                <p><strong>¿Qué NO cubre la garantía?</strong></p>
                                <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                    <li style={{ marginBottom: '8px' }}>Daños causados por uso indebido o manipulación contraria a las instrucciones</li>
                                    <li style={{ marginBottom: '8px' }}>Deterioro por almacenamiento inadecuado (exposición al calor extremo, humedad, etc.)</li>
                                    <li style={{ marginBottom: '8px' }}>Productos modificados o alterados por el consumidor</li>
                                    <li style={{ marginBottom: '8px' }}>Desgaste natural por uso normal del producto</li>
                                </ul>

                                <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
                                    Cambios de Producto
                                </h2>
                                <p>Si deseas cambiar tu kit por otro diseño o presentación, podemos ayudarte:</p>
                                <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                    <li style={{ marginBottom: '8px' }}>Tienes <strong>cinco (5) días hábiles</strong> desde la recepción para solicitar un cambio</li>
                                    <li style={{ marginBottom: '8px' }}>El producto debe estar <strong>sin abrir, sin uso, con sello de seguridad intacto</strong> y con todos sus componentes</li>
                                    <li style={{ marginBottom: '8px' }}>Los costos de envío del cambio (ida y vuelta) son asumidos por el comprador</li>
                                    <li style={{ marginBottom: '8px' }}>Si el producto de cambio tiene un precio mayor, deberás pagar la diferencia; si es menor, te reembolsaremos la diferencia</li>
                                </ul>
                                <p>Para solicitar un cambio, contáctanos por WhatsApp o correo con tu número de pedido.</p>

                                <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
                                    Reversión del Pago
                                </h2>
                                <p>
                                    Si realizaste tu pago con tarjeta de crédito, tarjeta débito, PSE, Nequi u otro medio electrónico, puedes solicitar la reversión del pago dentro de los <strong>cinco (5) días hábiles</strong> siguientes en los siguientes casos:
                                </p>
                                <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                    <li style={{ marginBottom: '8px' }}>Fuiste víctima de <strong>fraude</strong></li>
                                    <li style={{ marginBottom: '8px' }}>La transacción <strong>no fue solicitada</strong> ni autorizada por ti</li>
                                    <li style={{ marginBottom: '8px' }}><strong>No recibiste</strong> el producto</li>
                                    <li style={{ marginBottom: '8px' }}>El producto entregado <strong>no corresponde</strong> a lo que solicitaste</li>
                                    <li style={{ marginBottom: '8px' }}>El producto presenta <strong>defectos de calidad</strong></li>
                                </ul>
                                <p><strong>¿Cómo solicitar la reversión?</strong></p>
                                <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                    <li style={{ marginBottom: '8px' }}>Notifica a Croko por WhatsApp o correo electrónico</li>
                                    <li style={{ marginBottom: '8px' }}>Comunícate con tu <strong>banco o entidad financiera</strong> para iniciar el proceso de reversión</li>
                                    <li style={{ marginBottom: '8px' }}>Proporciona toda la documentación que respalde tu solicitud</li>
                                </ol>

                                <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
                                    Resumen del Proceso de Devolución
                                </h2>
                                <div style={{ overflowX: 'auto' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem', fontSize: '15px' }}>
                                        <thead>
                                            <tr style={{ backgroundColor: 'rgba(192, 136, 47, 0.08)' }}>
                                                <th style={{ padding: '12px 16px', border: '1px solid #e8e8e8', textAlign: 'left', color: 'var(--primary)', fontWeight: '600' }}>Situación</th>
                                                <th style={{ padding: '12px 16px', border: '1px solid #e8e8e8', textAlign: 'left', color: 'var(--primary)', fontWeight: '600' }}>Plazo para solicitar</th>
                                                <th style={{ padding: '12px 16px', border: '1px solid #e8e8e8', textAlign: 'left', color: 'var(--primary)', fontWeight: '600' }}>¿Quién paga el envío?</th>
                                                <th style={{ padding: '12px 16px', border: '1px solid #e8e8e8', textAlign: 'left', color: 'var(--primary)', fontWeight: '600' }}>Plazo de reembolso</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ padding: '12px 16px', border: '1px solid #e8e8e8' }}><strong>Retracto</strong> (me arrepentí)</td>
                                                <td style={{ padding: '12px 16px', border: '1px solid #e8e8e8' }}>5 días hábiles desde la entrega</td>
                                                <td style={{ padding: '12px 16px', border: '1px solid #e8e8e8' }}>El comprador</td>
                                                <td style={{ padding: '12px 16px', border: '1px solid #e8e8e8' }}>15 días calendario</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#fafafa' }}>
                                                <td style={{ padding: '12px 16px', border: '1px solid #e8e8e8' }}><strong>Garantía</strong> (producto defectuoso)</td>
                                                <td style={{ padding: '12px 16px', border: '1px solid #e8e8e8' }}>1 año desde la entrega</td>
                                                <td style={{ padding: '12px 16px', border: '1px solid #e8e8e8' }}>Croko</td>
                                                <td style={{ padding: '12px 16px', border: '1px solid #e8e8e8' }}>15 días calendario</td>
                                            </tr>
                                            <tr>
                                                <td style={{ padding: '12px 16px', border: '1px solid #e8e8e8' }}><strong>Cambio</strong> (quiero otro producto)</td>
                                                <td style={{ padding: '12px 16px', border: '1px solid #e8e8e8' }}>5 días hábiles desde la entrega</td>
                                                <td style={{ padding: '12px 16px', border: '1px solid #e8e8e8' }}>El comprador</td>
                                                <td style={{ padding: '12px 16px', border: '1px solid #e8e8e8' }}>Según disponibilidad</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#fafafa' }}>
                                                <td style={{ padding: '12px 16px', border: '1px solid #e8e8e8' }}><strong>Reversión del pago</strong></td>
                                                <td style={{ padding: '12px 16px', border: '1px solid #e8e8e8' }}>5 días hábiles</td>
                                                <td style={{ padding: '12px 16px', border: '1px solid #e8e8e8' }}>N/A (proceso bancario)</td>
                                                <td style={{ padding: '12px 16px', border: '1px solid #e8e8e8' }}>Según entidad financiera</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
                                    Información Importante
                                </h2>
                                <p><strong>Envíos y entregas</strong></p>
                                <p>Nuestro Kit Pinta Barriguita tiene un precio de <strong>$150.000 COP</strong> con <strong>envío incluido</strong> a todo Colombia. No hay costos ocultos ni cargos adicionales.</p>

                                <p><strong>Medio de pago</strong></p>
                                <p>Todos los pagos se procesan de forma segura a través de <strong>Wompi</strong>, respaldado por Bancolombia. Aceptamos tarjetas de crédito y débito, PSE, Nequi y otros medios electrónicos.</p>

                                <p><strong>Productos personalizados</strong></p>
                                <p>Las plantillas personalizadas (diseños a medida solicitados por el cliente) no son objeto de retracto una vez iniciado el proceso de personalización, según el numeral 3 del artículo 47 de la Ley 1480 de 2011. Sin embargo, sí están cubiertos por la garantía legal en caso de defectos.</p>

                                <p><strong>Compras como regalo</strong></p>
                                <p>Si compraste el kit como regalo, la persona que lo recibió puede ejercer los mismos derechos descritos en esta política presentando el comprobante de compra.</p>

                                <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
                                    ¿Tienes dudas?
                                </h2>
                                <p>Estamos para ayudarte. No dudes en escribirnos:</p>
                                <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: '20px' }}>
                                    <li style={{ marginBottom: '8px' }}><strong>WhatsApp:</strong> +57 316 816 1717</li>
                                    <li style={{ marginBottom: '8px' }}><strong>Correo:</strong> pintabarriguitas@croko.co</li>
                                    <li style={{ marginBottom: '8px' }}><strong>Instagram:</strong> @croko.co</li>
                                </ul>

                                <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
                                    Marco Legal
                                </h2>
                                <p>Esta política se fundamenta en las siguientes normas colombianas:</p>
                                <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                    <li style={{ marginBottom: '8px' }}><strong>Ley 1480 de 2011</strong> – Estatuto del Consumidor (Artículos 7 a 17: Garantía Legal; Artículos 46 a 48: Ventas a distancia y Derecho de retracto; Artículo 51: Reversión del pago)</li>
                                    <li style={{ marginBottom: '8px' }}><strong>Ley 2439 de 2024</strong> – Modificaciones al Estatuto del Consumidor para comercio electrónico</li>
                                    <li style={{ marginBottom: '8px' }}><strong>Decreto 587 de 2016</strong> – Reglamentación de la reversión del pago</li>
                                    <li style={{ marginBottom: '8px' }}><strong>Decreto 1499 de 2014</strong> – Reglamentación del comercio electrónico</li>
                                </ul>
                                <p>
                                    Para más información sobre tus derechos como consumidor, visita la <strong>Superintendencia de Industria y Comercio</strong>:{' '}
                                    <a href="https://www.sic.gov.co" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                                        www.sic.gov.co
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
