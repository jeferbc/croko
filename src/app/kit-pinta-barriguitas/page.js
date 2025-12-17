'use client'
import React from 'react'
import dynamic from 'next/dynamic'

// import Custom Components
import ProductSection from '@/containers/wedding/product'
import HeaderSection from '@/containers/kit/header/header'
import Testimonials from '@/components/Testimonials'
import StickyCTA from '@/components/StickyCTA'

// Dynamic imports for below-the-fold components
const ProductVideos = dynamic(() => import('@/containers/wedding/productVideos'), {
    loading: () => <div style={{ minHeight: '400px' }} />
})

const AccordionElementSection = dynamic(() => import('@/containers/elements/accordion'), {
    loading: () => <div style={{ minHeight: '300px' }} />
})

const PopularPosts = dynamic(() => import('@/containers/blog/posts'), {
    loading: () => <div style={{ minHeight: '500px' }} />
})

// Product Schema for Rich Snippets
const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Kit Pintura Barriga Embarazada",
    "description": "Kit completo para pintar barriguita de embarazada en casa. Incluye 15 colores, 3 plantillas personalizables, 4 pinceles profesionales y video tutorial.",
    "image": [
        "https://ik.imagekit.io/ge17f66b4ma/Kit%20foto%20690x551_2rLNnbXrzh.png"
    ],
    "brand": {
        "@type": "Brand",
        "name": "Croko"
    },
    "sku": "KIT-PINTA-001",
    "offers": {
        "@type": "Offer",
        "price": "150000",
        "priceCurrency": "COP",
        "availability": "https://schema.org/InStock",
        "url": "https://www.maquillajeembarazadas.com/kit-pinta-barriguitas",
        "seller": {
            "@type": "Organization",
            "name": "Croko"
        },
        "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "COP"
            },
            "shippingDestination": {
                "@type": "DefinedRegion",
                "addressCountry": "CO"
            },
            "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                    "@type": "QuantitativeValue",
                    "minValue": "1",
                    "maxValue": "2",
                    "unitCode": "DAY"
                },
                "transitTime": {
                    "@type": "QuantitativeValue",
                    "minValue": "1",
                    "maxValue": "3",
                    "unitCode": "DAY"
                }
            }
        }
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "200"
    }
}

// FAQ Schema for Rich Snippets
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Son seguras las pinturas durante el embarazo?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "¡Absolutamente! Nuestras pinturas hipoalergénicas son especialmente formuladas para pieles sensibles y 100% seguras durante el embarazo. Son dermatológicamente probadas, no tóxicas, de uso cosmético corporal, y se remueven fácilmente con agua y jabón. Están fabricadas con ingredientes vegetales, ceras y minerales de alta pureza, sin perfume. Más de 300 familias las han usado sin ningún problema."
            }
        },
        {
            "@type": "Question",
            "name": "¿Necesito habilidades artísticas para usarlo?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "¡Para nada! El kit incluye 3 plantillas fáciles de seguir que se transfieren directamente a la piel, dejando el diseño listo para rellenar con colores. Además, viene con una guía paso a paso y videotutoriales que te acompañan en todo el proceso. Familias sin ninguna experiencia artística crean diseños hermosos. Se trata de la experiencia de conexión familiar, no de la perfección artística."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cuándo es el mejor momento para hacer belly painting?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El tercer trimestre (semanas 28-36) es ideal, cuando la barriga está más redonda y la mamá aún se siente cómoda. Es perfecto como actividad de baby shower o como momento especial antes de que llegue el bebé. Sin embargo, es algo muy personal y depende del momento en que cada mamá se sienta segura y con ganas de crear este recuerdo único en familia."
            }
        },
        {
            "@type": "Question",
            "name": "¿Es un buen regalo para baby shower?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "¡Es uno de nuestros productos más regalados! A diferencia de ropa o artículos típicos que quedan olvidados, este kit crea una experiencia memorable para toda la familia. Las personas que lo regalan nos dicen que es 'el regalo que ella realmente recuerda'. Es perfecto para baby shower, revelación de género, o simplemente para celebrar el embarazo de una forma única y especial."
            }
        },
        {
            "@type": "Question",
            "name": "¿Qué incluye el kit?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El kit incluye TODO lo necesario para una experiencia completa: 15 colores de pinturas hipoalergénicas de uso cosmético, 3 plantillas con diferentes diseños que se transfieren fácilmente a la piel, 4 pinceles profesionales de diferentes tamaños, y acceso a videotutoriales paso a paso. No necesitas comprar nada más—todo está listo para crear recuerdos únicos en familia."
            }
        }
    ]
}

export default function Kit() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <HeaderSection />
            <ProductSection />
            <Testimonials />
            <ProductVideos />
            <PopularPosts />
            <AccordionElementSection kit="true" />
            <StickyCTA />
        </>
    )
}
