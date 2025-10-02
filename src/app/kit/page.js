'use client'
import React from 'react'
import dynamic from 'next/dynamic'

// import Custom Components
import CenterLogoHeader from '@/containers/common/center-logo-header'
import ProductSection from '@/containers/wedding/product'
import HeaderSection from '@/containers/kit/header/header'

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

const FooterSection = dynamic(() => import('@/containers/wedding/footer'), {
    loading: () => <div style={{ minHeight: '200px' }} />
})

const WhatsappRibbon = dynamic(() => import('@/containers/elements/common/whatsapp'), {
    ssr: false
})

export default function Kit() {

    return (
        <div>
            <CenterLogoHeader themeClass="wedding" kit="true" />
            <HeaderSection />
            <ProductSection />
            <ProductVideos />
            <PopularPosts />
            <AccordionElementSection kit="true" />
            <FooterSection kit="true" />
            <WhatsappRibbon kit="true" />
        </div>
    )
}
