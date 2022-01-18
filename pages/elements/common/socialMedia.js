import React from 'react';

const SocialMedia = (props) => (
  <>  
    <li>
      <a className={`copyright-text ${props.kit ? 'facebook-kit-lead' : 'facebook-local-lead'}`} href="https://www.facebook.com/crokolina" target='_blank'>
          <i aria-hidden="true" className="fa fa-facebook gradient-text"></i>
      </a>
    </li>
    <li>
      <a className={`copyright-text ${props.kit ? 'ig-kit-lead' : 'ig-local-lead'}`} href="https://www.instagram.com/croko_maquillaje_embarazada/" target='_blank'>
          <i aria-hidden="true" className="fa fa-instagram gradient-text"></i>
      </a>
    </li>
    <li>
      <a className={`copyright-text ${props.kit ? 'whatsapp-kit' : 'whatsapp-local'}`} href="https://wa.me/573168161717?text=Hola, estoy interesado en maquillaje prenatal en Medellín." target='_blank'>
          <i aria-hidden="true" className="fa fa-whatsapp gradient-text"></i>
      </a>
    </li>
  </>
);

export default SocialMedia;