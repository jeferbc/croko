import React, { useEffect } from 'react'
import Head from 'next/head'

// import Custom Components
import CenterLogoHeader from '../containers/common/center-logo-header'
import HeaderSection from './layouts/sections/wedding/header'
import GallerySection from './portfolio/full-width-3-grid'
import AboutSection from './layouts/sections/wedding/about'
import PricingSection from './elements/price/elementPrice3'
import AccordionElementSection from './elements/accordion'
import BlogSection from './layouts/sections/wedding/blog'
import FooterSection from './layouts/sections/wedding/footer'
import WhatsappRibbon from './elements/common/whatsapp'


const Home = () => {

    useEffect(() => {
        document.body.style.setProperty('--primary', '#c0882f')
        document.body.style.setProperty('--secondary', '#595959')
        document.body.style.setProperty('--light', '#BF862D')
        document.body.style.setProperty('--dark', '#ECC878')
    })

    return (
        <div>
            <Head>
                <meta name="description" content="Maquillaje corporal para embarazadas. Disfruta de un momento agradable en familia en Medellín"/>
                <meta name="keywords" content="Maquillaje embarazadas, maquillaje prenatal, maquillaje barriga, maquillaje estomago, pinta barrigas, pinta embarazadas, maquillaje corporal prenatal Medellín"/>
                <meta property="og:title" content="Maquillajes embarazadas Medellín | Croko" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Maquillaje corporal para embarazadas. Disfruta de un momento agradable en familia en Medellín" />
                <meta property="og:image" content="<%= ../assets/images/logo/croko.png" />
                <meta property="og:url" content="https://www.maquillajeembarazadas.com" />
                <title>Maquillajes embarazadas Medellín | Croko</title>
                <meta charSet="utf-8" />
            </Head>

            <CenterLogoHeader themeClass="wedding" />

            <HeaderSection />

            <GallerySection />

            <AboutSection />

            <PricingSection />

            <BlogSection />

            <AccordionElementSection />

            <FooterSection />

            <WhatsappRibbon />

        </div>
    )
}

export default Home
