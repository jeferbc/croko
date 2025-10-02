'use client'
import React from 'react'
import dynamic from 'next/dynamic'

// import Custom Components
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

export default function Kit() {
    return (
        <>
            <HeaderSection />
            <ProductSection />
            <ProductVideos />
            <PopularPosts />
            <AccordionElementSection kit="true" />
        </>
    )
}
