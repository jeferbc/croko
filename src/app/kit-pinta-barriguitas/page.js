import React from 'react'
import dynamic from 'next/dynamic'

// import Custom Components
import ProductSection from '@/containers/wedding/product'
import HeaderSection from '@/containers/kit/header/header'
import Testimonials from '@/components/Testimonials'
import StickyCTA from '@/components/StickyCTA'

const ProductVideos = dynamic(() => import('@/containers/wedding/productVideos'))
const AccordionElementSection = dynamic(() => import('@/containers/elements/accordion'))
const PopularPosts = dynamic(() => import('@/containers/blog/posts'))

// Product Schema for Rich Snippets
const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Kit Pinta Barriguita - Kit de Pintura para Barriga de Embarazada",
    "description": "Crea un recuerdo inolvidable de tu embarazo junto a tu familia. Kit completo con 15 colores de pinturas hipoalergénicas, pinceles profesionales, plantillas y videotutoriales. +500 familias felices. Ideal para baby showers y sesiones fotográficas de maternidad.",
    "image": [
        "https://ik.imagekit.io/ge17f66b4ma/Fotokitcarrusel%20(1)%20(1)_kduJxCzra.png"
    ],
    "brand": {
        "@type": "Brand",
        "name": "Croko"
    },
    "sku": "CROKO-KPB-001",
    "offers": {
        "@type": "Offer",
        "price": 190000,
        "priceCurrency": "COP",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "url": "https://www.croko.co/kit-pinta-barriguitas",
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
                    "minValue": 1,
                    "maxValue": 2,
                    "unitCode": "DAY"
                },
                "transitTime": {
                    "@type": "QuantitativeValue",
                    "minValue": 3,
                    "maxValue": 7,
                    "unitCode": "DAY"
                }
            }
        },
        "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "CO",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 30,
            "returnMethod": "https://schema.org/ReturnByMail"
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, '\\u003c') }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
            />
            <HeaderSection isKitPage={true} />
            <ProductSection />
            <Testimonials />
            <ProductVideos />
            <PopularPosts />
            <AccordionElementSection kit="true" />
            <StickyCTA />
        </>
    )
}
