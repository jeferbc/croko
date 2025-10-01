"use client"
import React, { useEffect } from 'react'

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
  useEffect(() => {
    document.body.style.setProperty('--primary', '#c0882f')
    document.body.style.setProperty('--secondary', '#595959')
    document.body.style.setProperty('--light', '#BF862D')
    document.body.style.setProperty('--dark', '#ECC878')
  }, [])

  return (
    <div>
      <CenterLogoHeader themeClass="wedding"/>
      <HeaderSection />
      <GallerySection />
      <PricingSection />
      <AboutSection />
      <BlogSection />
      <AccordionElementSection />
      <PopularPosts />
      <FooterSection />
      <WhatsappRibbon />
    </div>
  )
}