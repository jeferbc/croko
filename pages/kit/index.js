import React, { useEffect } from 'react'
import Head from 'next/head'

// import Custom Components
import CenterLogoHeader from '../../containers/common/center-logo-header'
import ProductSection from './../layouts/sections/wedding/product'
// import ProductVideos from '../layouts/sections/wedding/productVideos'
import AccordionElementSection from './../elements/accordion'
import FooterSection from './../layouts/sections/wedding/footer'
import WhatsappRibbon from './../elements/common/whatsapp'

const Kit = () => {

    useEffect(() => {
        document.body.style.setProperty('--primary', '#c0882f')
        document.body.style.setProperty('--secondary', '#595959')
        document.body.style.setProperty('--light', '#BF862D')
        document.body.style.setProperty('--dark', '#ECC878')
    })

    return (
        <div>
            <Head>
                <meta name="description" content="Maquilla tu barriguita profesionalmente y disfruta de un momento memorable en familia, además de estimular tu bebé. Domicilio en Medellín"/>
                <meta name="keywords" content="Maquillaje embarazadas, maquillaje prenatal, maquillaje barriga, maquillaje barriguita, maquillaje estomago, pinta barrigas, pinta embarazadas, maquillaje corporal prenatal Medellín, maquillaje para embarazadas, maquillaje de embarazo, belly painting en Medellín"/>
                <meta property="og:title" content="Maquillajes embarazadas Medellín | Croko" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Maquilla tu barriguita profesionalmente y disfruta de un momento memorable en familia, además de estimular tu bebé. Domicilio en Medellín" />
                <meta property="og:image" content="../assets/images/logo/croko.png" />
                <meta property="og:url" content="https://www.maquillajeembarazadas.com" />
                <title>Kit maquillaje prenatal en casa</title>
                <meta charSet="utf-8" />
            </Head>

            <CenterLogoHeader themeClass="wedding" kit="true" />
            <ProductSection />
            {/* <ProductVideos /> */}
            <AccordionElementSection kit="true" />
            <FooterSection />
            <WhatsappRibbon />
        </div>
    )
}

export default Kit