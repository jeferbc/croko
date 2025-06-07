import React, { useEffect } from 'react'
import Head from 'next/head'

// import Custom Components
import CenterLogoHeader from '../../containers/common/center-logo-header'
import ProductSection from './../layouts/sections/wedding/product'
import ProductVideos from '../layouts/sections/wedding/productVideos'
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
// TODO: check SEO, description size, setup google search console
    return (
        <div>
            <Head>
                <title title>Kit maquillaje de embarazadas | Croko</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Celebra el embarazo en familia maquillando tu barriguita. Este ejercicio familiar relaja a la embarazada, estimula al bebé, y a su vez ayuda a crear y fortalecer vínculos afectivos desde el vientre"/>
                <meta name="keywords" content="Maquillaje embarazadas,Maquillaje embarazadas en familia, Maquillaje embarazadas en casa, automaquillaje embarazadas, Maquillaje embarazadas en pareja, maquillaje prenatal en familia, Maquillaje estimulante para embarazadas, estimulación prenatal, maquillaje barriga con amigos, maquillaje barriguita, maquillaje estomago, Body art para embarazadas en casa, pinta barrigas, pinta embarazadas, maquillaje corporal prenatal, maquillaje para embarazadas, maquillaje de embarazo, belly painting"/>

                <meta itemProp="name" content="Kit maquillaje de embarazadas | Croko"/>
                <meta itemProp="description" content="Celebra el embarazo en familia maquillando tu barriguita. Este ejercicio familiar relaja a la embarazada, estimula al bebé, y a su vez ayuda a crear y fortalecer vínculos afectivos desde el vientre"/>
                <meta itemProp="image" content="https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg"/>

                <meta property="og:url" content="https://www.maquillajeembarazadas.com/kit"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Kit maquillaje de embarazadas | Croko"/>
                <meta property="og:description" content="Celebra el embarazo en familia maquillando tu barriguita. Este ejercicio familiar relaja a la embarazada, estimula al bebé, y a su vez ayuda a crear y fortalecer vínculos afectivos desde el vientre"/>
                <meta property="og:image" content="https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Kit maquillaje de embarazadas | Croko"/>
                <meta name="twitter:description" content="Celebra el embarazo en familia maquillando tu barriguita. Este ejercicio familiar relaja a la embarazada, estimula al bebé, y a su vez ayuda a crear y fortalecer vínculos afectivos desde el vientre"/>
                <meta name="twitter:image" content="https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg"/>

                <title>Kit maquillaje prenatal en casa</title>
                <meta charSet="utf-8" />
            </Head>

            <CenterLogoHeader themeClass="wedding" kit="true" />
            <ProductSection />
            <ProductVideos />
            <AccordionElementSection kit="true" />
            <FooterSection kit="true" />
            <WhatsappRibbon kit="true" />
        </div>
    )
}

export default Kit