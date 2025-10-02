"use client"
import React from 'react'

// import Custom Components
import HeaderSection from '@/containers/kit/header/header'
import GallerySection from '@/containers/portfolio/full-width-3-grid'
import AboutSection from '@/containers/wedding/about'
import PricingSection from '@/containers/elements/price/elementPrice3'
import AccordionElementSection from '@/containers/elements/accordion'
import BlogSection from '@/containers/wedding/blog'
import PopularPosts from '@/containers/blog/posts'

export default function Home() {
  return (
    <>
      <HeaderSection />
      <GallerySection />
      <PricingSection />
      <AboutSection />
      <BlogSection />
      <PopularPosts />
      <AccordionElementSection />
    </>
  )
}