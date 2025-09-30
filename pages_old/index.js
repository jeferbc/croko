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
                <title>Maquillajes embarazadas Medellín | Croko</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Maquilla tu barriguita profesionalmente y disfruta de un momento memorable en familia, además de estimular tu bebé. Domicilio en Medellín"/>
                <meta name="keywords" content="Maquillaje embarazadas, maquillaje prenatal, maquillaje barriga, maquillaje barriguita, maquillaje estomago, pinta barrigas, pinta embarazadas, maquillaje corporal prenatal Medellín, maquillaje para embarazadas, maquillaje de embarazo, belly painting en Medellín"/>

                <meta itemProp="name" content="Maquillajes embarazadas Medellín | Croko"/>
                <meta itemProp="description" content="Maquilla tu barriguita profesionalmente y disfruta de un momento memorable en familia, además de estimular tu bebé. Domicilio en Medellín"/>
                <meta itemProp="image" content="https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg?updatedAt=1640711126163"/>

                <meta property="og:url" content="https://www.maquillajeembarazadas.com"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Maquillajes embarazadas Medellín | Croko"/>
                <meta property="og:description" content="Maquilla tu barriguita profesionalmente y disfruta de un momento memorable en familia, además de estimular tu bebé. Domicilio en Medellín"/>
                <meta property="og:image" content="https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Maquillajes embarazadas Medellín | Croko"/>
                <meta name="twitter:description" content="Maquilla tu barriguita profesionalmente y disfruta de un momento memorable en familia, además de estimular tu bebé. Domicilio en Medellín"/>
                <meta name="twitter:image" content="https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg?updatedAt=1640711126163"/>
            </Head>

            <CenterLogoHeader themeClass="wedding"/>

            <HeaderSection />

            <GallerySection />

            <PricingSection />
            
            <AboutSection />

            <BlogSection />

            <AccordionElementSection />

            <FooterSection />

            <WhatsappRibbon />

        </div>
    )
}

export default Home
