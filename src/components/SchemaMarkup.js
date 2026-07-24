import React from 'react'

// JSON-LD must be present in the initial server-rendered HTML. next/script
// injects after hydration, so crawlers fetching raw HTML never see it — use a
// plain inline <script> instead (same pattern as the homepage schemas).
const JsonLd = ({ id, schema }) => (
    <script
        id={id}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
)

export const ArticleSchema = ({ post, url }) => {
    const datePublished = post.date ? new Date(post.date).toISOString() : "2025-01-15T00:00:00+00:00"
    const dateModified = post.dateModified
        ? new Date(post.dateModified).toISOString()
        : datePublished

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "image": post.image,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "inLanguage": "es-CO",
        "author": {
            "@type": "Person",
            "name": post.author || "Carolina Rincón",
            "url": "https://www.croko.co/carolina-rincon"
        },
        "publisher": {
            "@type": "Organization",
            "@id": "https://www.croko.co/#organization",
            "name": "Croko",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.croko.co/assets/images/logo/croko_logo.png",
                "width": 462,
                "height": 255
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url || "https://www.croko.co/maquillaje-para-embarazadas"
        },
        ...(post.reviewedBy && {
            "reviewedBy": {
                "@type": "Person",
                "name": post.reviewedBy,
                "jobTitle": "Psicóloga clínica",
                "worksFor": { "@type": "Organization", "name": "Tranquilamente", "url": "https://www.tranquilamente.co" }
            }
        }),
        "articleSection": "Belleza y Embarazo",
        "keywords": ["maquillaje para embarazadas", "maquillaje seguro embarazo", "cosméticos embarazo", "productos belleza prenatal", "maquillaje hipoalergénico"]
    }

    return <JsonLd id="schema-article" schema={schema} />
}

export const FAQPageSchema = ({ questions } = {}) => {
    const mainEntity = questions || [
        {
            question: "¿Es seguro usar maquillaje durante el embarazo?",
            answer: "Sí, es completamente seguro usar maquillaje durante el embarazo siempre y cuando evites ciertos ingredientes específicos como retinol, altas concentraciones de ácido salicílico y parabenos. La mayoría de los productos de maquillaje son seguros cuando se usan tópicamente en cantidades normales."
        },
        {
            question: "¿Qué ingredientes de maquillaje debo evitar durante el embarazo?",
            answer: "Los principales ingredientes a evitar son: retinol y derivados de vitamina A, ácido salicílico en altas concentraciones (más del 2%), parabenos, ftalatos, formaldehído, y filtros químicos de protección solar (oxibenzona, octinoxato)."
        },
        {
            question: "¿Puedo usar labial durante el embarazo y la lactancia?",
            answer: "Sí, puedes usar labial durante el embarazo y la lactancia sin problema. Solo asegúrate de elegir productos con ingredientes naturales, sin parabenos, sin plomo y preferiblemente hipoalergénicos. Como el labial puede ingerirse parcialmente, es especialmente importante que los ingredientes sean seguros."
        },
        {
            question: "¿El maquillaje puede afectar al bebé durante el embarazo?",
            answer: "El maquillaje facial usado de manera tópica y en cantidades normales generalmente no afecta al bebé. La piel actúa como una barrera protectora y la mayoría de los ingredientes cosméticos no penetran lo suficiente como para llegar al torrente sanguíneo en cantidades significativas. Sin embargo, ciertos ingredientes como retinoides en altas dosis sí pueden ser problemáticos."
        },
        {
            question: "¿Por qué mi piel está más sensible durante el embarazo?",
            answer: "Durante el embarazo, los cambios hormonales pueden hacer que tu piel sea más reactiva y sensible. Muchas embarazadas desarrollan acné hormonal, melasma o manchas oscuras, mayor sensibilidad a fragancias y químicos, o piel más seca o más grasa de lo habitual. Por eso es recomendable usar productos hipoalergénicos y formulados para piel sensible."
        }
    ]

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": mainEntity.map(({ question, answer }) => ({
            "@type": "Question",
            "name": question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": answer
            }
        }))
    }

    return <JsonLd id="schema-faq" schema={schema} />
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

    return <JsonLd id="schema-breadcrumb" schema={schema} />
}

export const OrganizationSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.croko.co/#organization",
        "name": "Croko",
        "url": "https://www.croko.co",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.croko.co/assets/images/logo/croko_logo.png",
            "width": 462,
            "height": 255
        },
        "description": "Especialistas en belly painting y maquillaje artístico para embarazadas en Colombia. Kits DIY y servicios profesionales.",
        "founder": {
            "@type": "Person",
            "name": "Carolina Rincón",
            "url": "https://www.croko.co/carolina-rincon"
        },
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
            "https://www.instagram.com/croko_maquillaje_embarazada",
            "https://www.facebook.com/crokolina",
            "https://www.youtube.com/@Crokolina"
        ]
    }

    return <JsonLd id="schema-organization" schema={schema} />
}
