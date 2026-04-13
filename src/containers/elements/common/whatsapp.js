'use client';
import React, { Fragment, useState, useEffect } from 'react';
import IKImage from '@/components/IKImage';
import { appendAttributionToMessage } from '@/lib/adsTracking';

var whatsappRibbonStyles = {
  a: {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    zIndex: 100,
    textDecoration: "none"
  }, img: {
    width: "40px"
  }
}

const WhatsappRibbon = (props) => {
  const baseMessage = props.kit
    ? 'Hola! 👋 Estoy interesada en el Kit de Pintura de Barriguita. Me gustaría saber más sobre:'
    : 'Hola, estoy interesado en maquillaje prenatal en Medellín.';

  const [href, setHref] = useState(
    `https://wa.me/573168161717?text=${encodeURIComponent(baseMessage)}`
  );

  useEffect(() => {
    const enriched = appendAttributionToMessage(baseMessage);
    setHref(`https://wa.me/573168161717?text=${encodeURIComponent(enriched)}`);
  }, [baseMessage]);

  return (
    <Fragment>
      <a
        style={whatsappRibbonStyles.a}
        href={href}
        target="_blank"
        className={props.kit ? 'whatsapp-kit' : 'whatsapp-local'}
        aria-label="Contáctanos por WhatsApp"
        rel="noopener noreferrer"
      >
        <IKImage
          src="/whatsapp_logo_FzIZzUouZt6.png"
          alt="WhatsApp"
          width={40}
          height={40}
          transformation={[{ width: 80, height: 80, quality: 90, format: 'auto' }]}
          style={whatsappRibbonStyles.img}
          loading="eager"
        />
      </a>
    </Fragment>
  );
}

export default WhatsappRibbon;