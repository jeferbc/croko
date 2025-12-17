import React, { Fragment } from 'react';
import IKImage from '@/components/IKImage';

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
  let message = props.kit ? 'Hola! 👋 Estoy interesada en el Kit de Pintura de Barriguita. Me gustaría saber más sobre:' : 'Hola, estoy interesado en maquillaje prenatal en Medellín.'
  return (
    <Fragment>
      <a style={whatsappRibbonStyles.a} href={`https://wa.me/573168161717?text=${message}`} target="_blank" className={props.kit ? 'whatsapp-kit' : 'whatsapp-local'}>
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