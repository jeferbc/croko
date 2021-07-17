import React, { Fragment } from 'react';

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

const WhatsappRibbon = () => {
  return (
      <Fragment>
        <a style={whatsappRibbonStyles.a} href="https://wa.me/573168161717?text=Hola, estoy interesado en maquillaje prenatal en Medellín." target="_blank">
            <img alt="logo" style={whatsappRibbonStyles.img} src="../assets/images/whatsapp_logo.png" />
        </a>
      </Fragment>
  );


}

export default WhatsappRibbon;