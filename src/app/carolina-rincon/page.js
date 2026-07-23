import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'reactstrap'

export const metadata = {
    title: 'Carolina Rincón: Microbióloga y Artista de Belly Painting | Croko',
    description: 'Conoce a Carolina Rincón, microbióloga de la Universidad de Antioquia, fundadora de Croko y pionera del pinta barriguitas en Colombia con más de 11 años de experiencia.',
    alternates: {
        canonical: 'https://www.croko.co/carolina-rincon',
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        url: 'https://www.croko.co/carolina-rincon',
        title: 'Carolina Rincón: Microbióloga y Artista de Belly Painting | Croko',
        description: 'Fundadora de Croko y creadora del primer Kit Pinta Barriguitas de Colombia. Más de 800 sesiones presenciales y 1.000 familias acompañadas.',
    },
}

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.croko.co/carolina-rincon#person",
    "name": "Carolina Rincón",
    "url": "https://www.croko.co/carolina-rincon",
    "jobTitle": "Artista de belly painting y fundadora de Croko",
    "description": "Microbióloga industrial y ambiental de la Universidad de Antioquia. Desde 2014 se dedica al pinta barriguitas (belly painting) en Colombia: más de 800 sesiones presenciales en Medellín y más de 1.000 familias acompañadas con el Kit Croko en todo el país.",
    "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Universidad de Antioquia"
    },
    "worksFor": {
        "@id": "https://www.croko.co/#organization"
    },
    "knowsAbout": [
        "Belly painting",
        "Pinta barriguitas",
        "Maquillaje prenatal",
        "Pinturas cosméticas hipoalergénicas",
        "Microbiología"
    ],
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Medellín",
        "addressCountry": "CO"
    },
    "sameAs": [
        "https://www.instagram.com/croko_maquillaje_embarazada",
        "https://www.tiktok.com/@crokolina",
        "https://www.facebook.com/crokolina",
        "https://www.youtube.com/@Crokolina"
    ]
}

export default function CarolinaRinconPage() {
    return (
        <section className="inner-page section-b-space">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, '\\u003c') }}
            />
            <Container>
                <Row>
                    <Col lg="8" className="offset-lg-2">
                        <article style={{ marginTop: '150px', marginBottom: '60px', fontSize: '16px', lineHeight: '1.7', color: '#333' }}>
                            <h1 className="gradient-text" style={{ color: '#c0882f', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                                Carolina Rincón
                            </h1>
                            <p className="lead" style={{ fontSize: '1.2rem', color: '#555' }}>
                                Microbióloga, artista de belly painting y fundadora de Croko.
                                Pionera del pinta barriguitas en Colombia.
                            </p>

                            <h2 style={{ color: '#c0882f', marginTop: '30px' }}>Quién soy</h2>
                            <p>
                                Soy microbióloga industrial y ambiental egresada de la <strong>Universidad de
                                Antioquia</strong>, y desde <strong>2014</strong> me dedico exclusivamente a pintar
                                barriguitas de embarazadas en Colombia. Empecé siendo estudiante, y lo que comenzó
                                como un oficio se convirtió en mi propósito: he pintado más de{' '}
                                <strong>800 barriguitas de forma presencial</strong> en Medellín y el Valle de Aburrá,
                                y he acompañado a más de <strong>1.000 familias</strong> en todo el país a través del
                                Kit Croko.
                            </p>
                            <p>
                                Mi formación como microbióloga define cómo trabajo: uso únicamente pinturas
                                cosméticas de grado profesional, a base de agua, hipoalergénicas y sin interruptores
                                endocrinos. En más de una década de sesiones nunca hemos tenido un caso de alergia.
                            </p>

                            <h2 style={{ color: '#c0882f', marginTop: '30px' }}>Croko y el primer kit de Colombia</h2>
                            <p>
                                Fundé <Link href="/">Croko</Link> para que pintar la barriguita dejara de ser un lujo
                                de pocas ciudades. En <strong>diciembre de 2021</strong> lancé el{' '}
                                <Link href="/">Kit Pinta Barriguitas</Link>, el primero creado en Colombia, con las
                                mismas pinturas profesionales que uso en mis sesiones, plantillas guiadas y
                                videotutoriales para que cualquier familia viva la experiencia en casa.
                            </p>
                            <p>
                                Si estás en Medellín, también ofrezco{' '}
                                <Link href="/belly-painting-medellin">sesiones presenciales a domicilio</Link>. Y si
                                quieres conocer a fondo este arte, escribí una{' '}
                                <Link href="/blog/pinta-barriguitas-colombia">
                                    guía completa sobre el pinta barriguitas en Colombia
                                </Link>{' '}
                                con todo lo que aprendí en estos años: cuándo hacerlo, qué pinturas son seguras y
                                cómo se vive una sesión.
                            </p>

                            <h2 style={{ color: '#c0882f', marginTop: '30px' }}>Encuéntrame en</h2>
                            <ul>
                                <li>
                                    Instagram:{' '}
                                    <a href="https://www.instagram.com/croko_maquillaje_embarazada/" target="_blank" rel="noopener noreferrer">
                                        @croko_maquillaje_embarazada
                                    </a>
                                </li>
                                <li>
                                    TikTok:{' '}
                                    <a href="https://www.tiktok.com/@crokolina" target="_blank" rel="noopener noreferrer">
                                        @crokolina
                                    </a>
                                </li>
                                <li>
                                    YouTube:{' '}
                                    <a href="https://www.youtube.com/@Crokolina" target="_blank" rel="noopener noreferrer">
                                        @Crokolina
                                    </a>
                                </li>
                                <li>WhatsApp: +57 316 816 1717</li>
                            </ul>
                        </article>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
