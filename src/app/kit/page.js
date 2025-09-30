'use client'
import React, { useEffect } from 'react'

// import Custom Components
import CenterLogoHeader from '@/containers/common/center-logo-header'
import ProductSection from '@/containers/wedding/product'
import ProductVideos from '@/containers/wedding/productVideos'
import AccordionElementSection from '@/containers/elements/accordion'
import PopularPosts from '@/containers/blog/posts'
import FooterSection from '@/containers/wedding/footer'
import WhatsappRibbon from '@/containers/elements/common/whatsapp'
import HeaderSection from '@/containers/kit/header/header'

export default function Kit() {

    useEffect(() => {
        document.body.style.setProperty('--primary', '#c0882f')
        document.body.style.setProperty('--secondary', '#595959')
        document.body.style.setProperty('--light', '#BF862D')
        document.body.style.setProperty('--dark', '#ECC878')
    }, [])

    return (
        <div>
            <CenterLogoHeader themeClass="wedding" kit="true" />
            <HeaderSection />
            <ProductSection />
            <ProductVideos />
            <AccordionElementSection kit="true" />
            <PopularPosts />
            <FooterSection kit="true" />
            <WhatsappRibbon kit="true" />
        </div>
    )
}
