import React from 'react'

import HeaderSection from '@/containers/kit/header/header'
import GallerySection from '@/containers/portfolio/full-width-3-grid'
import AboutSection from '@/containers/wedding/about'
import PricingSection from '@/containers/elements/price/elementPrice3'
import AccordionElementSection from '@/containers/elements/accordion'
import BlogSection from '@/containers/wedding/blog'
import PopularPosts from '@/containers/blog/posts'

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://www.croko.co/belly-painting-medellin#localbusiness",
    "name": "Croko",
    "description": "Artista profesional de belly painting a domicilio en Medellín. Pinturas certificadas para body art, sesiones artísticas para embarazadas. Crea recuerdos inolvidables en familia.",
    "url": "https://www.croko.co/belly-painting-medellin",
    "image": "https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg",
    "logo": "https://www.croko.co/assets/images/logo/croko_logo.png",
    "telephone": "+573168161717",
    "email": "pintabarriguitas@croko.co",
    "priceRange": "$$",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Medellín",
        "addressRegion": "Antioquia",
        "addressCountry": "CO"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 6.24450,
        "longitude": -75.57390
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "09:00",
            "closes": "14:00"
        }
    ],
    "areaServed": [
        { "@type": "City", "name": "Medellín" },
        { "@type": "City", "name": "Envigado" },
        { "@type": "City", "name": "Bello" },
        { "@type": "City", "name": "Itagüí" },
        { "@type": "City", "name": "Sabaneta" }
    ],
    "sameAs": [
        "https://www.instagram.com/croko_maquillaje_embarazada",
        "https://www.facebook.com/crokolina",
        "https://www.youtube.com/@Crokolina"
    ]
}

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://www.croko.co"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Belly Painting Medellín",
            "item": "https://www.croko.co/belly-painting-medellin"
        }
    ]
}

export default function BellyPaintingMedellin() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c') }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
            />
            <HeaderSection isKitPage={false} />
            <GallerySection />
            <PricingSection />
            <AboutSection />
            <BlogSection />
            <PopularPosts />
            <AccordionElementSection />
            <section aria-label="Información de contacto" style={{ padding: '40px 0', backgroundColor: '#faf7f2' }}>
                <div className="container text-center">
                    <h2 style={{ color: '#c0882f', fontSize: '1.5rem', fontWeight: 600, marginBottom: '12px' }}>
                        Belly Painting a domicilio en Medellín
                    </h2>
                    <address style={{ fontStyle: 'normal', color: '#555', fontSize: '15px', lineHeight: '1.9' }}>
                        <strong>Croko</strong> — Medellín, Antioquia, Colombia<br />
                        Zonas de servicio: Medellín, Envigado, Bello, Itagüí, Sabaneta<br />
                        <a href="tel:+573168161717" style={{ color: '#c0882f', fontWeight: 500, textDecoration: 'none' }}>
                            +57 316 816 1717
                        </a>
                        {' · '}
                        <a href="mailto:pintabarriguitas@croko.co" style={{ color: '#c0882f', fontWeight: 500, textDecoration: 'none' }}>
                            pintabarriguitas@croko.co
                        </a>
                    </address>
                </div>
            </section>
        </>
    )
}
