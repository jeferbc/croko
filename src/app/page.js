"use client"
import React from 'react'

// import Custom Components
import CenterLogoHeader from '@/containers/common/center-logo-header'
import HeaderSection from '@/containers/kit/header/header'
import GallerySection from '@/containers/portfolio/full-width-3-grid'
import AboutSection from '@/containers/wedding/about'
import PricingSection from '@/containers/elements/price/elementPrice3'
import AccordionElementSection from '@/containers/elements/accordion'
import BlogSection from '@/containers/wedding/blog'
import PopularPosts from '@/containers/blog/posts'
import FooterSection from '@/containers/wedding/footer'
import WhatsappRibbon from '@/containers/elements/common/whatsapp'

export default function Home() {

  return (
    <div>
      <CenterLogoHeader themeClass="wedding"/>
      <HeaderSection />
      <GallerySection />
      <PricingSection />
      <AboutSection />
      <BlogSection />
      <PopularPosts />
      <AccordionElementSection />
      <FooterSection />
      <WhatsappRibbon />
    </div>
  )
}