import React from 'react'
import Script from 'next/script'

export const ArticleSchema = ({ post, url }) => {
    const datePublished = post.date ? new Date(post.date).toISOString() : "2025-01-15T00:00:00+00:00"
    const dateModified = post.dateModified
        ? new Date(post.dateModified).toISOString()
        : datePublished

    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.description,
        "image": post.image,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "author": {
            "@type": "Person",
            "name": post.author || "Carolina Rincón",
            "url": "https://www.croko.co"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Croko",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.croko.co/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url || "https://www.croko.co/maquillaje-para-embarazadas"
        },
        "articleSection": "Belleza y Embarazo",
        "keywords": ["maquillaje para embarazadas", "maquillaje seguro embarazo", "cosméticos embarazo", "productos belleza prenatal", "maquillaje hipoalergénico"]
    }

    return (
        <Script
            id="schema-article"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export const FAQPageSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Es seguro usar maquillaje durante el embarazo?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, es completamente seguro usar maquillaje durante el embarazo siempre y cuando evites ciertos ingredientes específicos como retinol, altas concentraciones de ácido salicílico y parabenos. La mayoría de los productos de maquillaje son seguros cuando se usan tópicamente en cantidades normales."
                }
            },
            {
                "@type": "Question",
                "name": "¿Qué ingredientes de maquillaje debo evitar durante el embarazo?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Los principales ingredientes a evitar son: retinol y derivados de vitamina A, ácido salicílico en altas concentraciones (más del 2%), parabenos, ftalatos, formaldehído, y filtros químicos de protección solar (oxibenzona, octinoxato)."
                }
            },
            {
                "@type": "Question",
                "name": "¿Puedo usar labial durante el embarazo y la lactancia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, puedes usar labial durante el embarazo y la lactancia sin problema. Solo asegúrate de elegir productos con ingredientes naturales, sin parabenos, sin plomo y preferiblemente hipoalergénicos. Como el labial puede ingerirse parcialmente, es especialmente importante que los ingredientes sean seguros."
                }
            },
            {
                "@type": "Question",
                "name": "¿El maquillaje puede afectar al bebé durante el embarazo?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El maquillaje facial usado de manera tópica y en cantidades normales generalmente no afecta al bebé. La piel actúa como una barrera protectora y la mayoría de los ingredientes cosméticos no penetran lo suficiente como para llegar al torrente sanguíneo en cantidades significativas. Sin embargo, ciertos ingredientes como retinoides en altas dosis sí pueden ser problemáticos."
                }
            },
            {
                "@type": "Question",
                "name": "¿Por qué mi piel está más sensible durante el embarazo?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Durante el embarazo, los cambios hormonales pueden hacer que tu piel sea más reactiva y sensible. Muchas embarazadas desarrollan acné hormonal, melasma o manchas oscuras, mayor sensibilidad a fragancias y químicos, o piel más seca o más grasa de lo habitual. Por eso es recomendable usar productos hipoalergénicos y formulados para piel sensible."
                }
            }
        ]
    }

    return (
        <Script
            id="schema-faq"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export const BreadcrumbSchema = ({ items } = {}) => {
    const itemListElement = items || [
        { name: 'Inicio', item: 'https://www.croko.co' },
        { name: 'Maquillaje Para Embarazadas', item: 'https://www.croko.co/maquillaje-para-embarazadas' }
    ]

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": itemListElement.map((entry, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": entry.name,
            "item": entry.item
        }))
    }

    return (
        <Script
            id="schema-breadcrumb"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export const OrganizationSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Croko",
        "url": "https://www.croko.co",
        "logo": "https://www.croko.co/logo.png",
        "description": "Especialistas en belly painting y maquillaje artístico para embarazadas en Colombia. Kits DIY y servicios profesionales.",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "CO",
            "addressLocality": "Medellín"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+573168161717",
            "contactType": "Customer Service",
            "areaServed": "CO",
            "availableLanguage": "Spanish"
        },
        "sameAs": [
            "https://www.instagram.com/croko_maquillaje_embarazada"
        ]
    }

    return (
        <Script
            id="schema-organization"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
