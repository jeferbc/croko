'use client'
import React from 'react'
import dynamic from 'next/dynamic'

// import Custom Components
import HeaderSection from '@/containers/wedding/header'
import GallerySection from '@/containers/portfolio/full-width-3-grid'
import AboutSection from '@/containers/wedding/about'
import PricingSection from '@/containers/elements/price/elementPrice2'

// Dynamic imports for below-the-fold components
const PopularPosts = dynamic(() => import('@/containers/blog/posts'), {
    loading: () => <div style={{ minHeight: '500px' }} />
})

const AccordionElementSection = dynamic(() => import('@/containers/elements/accordion'), {
    loading: () => <div style={{ minHeight: '300px' }} />
})

export default function Servicio() {
    return (
        <>
            <HeaderSection />
            <GallerySection />
            <PricingSection />
            <AboutSection />
            <PopularPosts />
            <AccordionElementSection />
        </>
    )
}
