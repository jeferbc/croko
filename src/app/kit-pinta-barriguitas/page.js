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

export default function Kit() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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
