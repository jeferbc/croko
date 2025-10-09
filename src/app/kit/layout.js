export const metadata = {
  title: 'Kit Body Paint Para Embarazadas: Todo Para Pintar Tu Barriga en Casa | Croko',
  description: '¿Quieres pintar tu panza de embarazada en familia? Kit completo con pinturas hipoalergénicas, 3 plantillas, pinceles y tutorial. Envío gratis Colombia',
  keywords: 'Kit maquillaje embarazadas, body paint para embarazadas, kit pintar barriga, maquillaje para panza embarazada, pinturas para embarazadas, plantillas barriga embarazada, kit belly painting, maquillaje prenatal casa, pintar barriga embarazada, maquillaje corporal embarazadas',
  openGraph: {
    url: 'https://www.maquillajeembarazadas.com/kit',
    type: 'product',
    title: 'Kit Body Paint Para Embarazadas: Todo Para Pintar Tu Barriga en Casa | Croko',
    description: 'Kit completo con pinturas hipoalergénicas, 3 plantillas, pinceles y tutorial. Envío gratis Colombia',
    images: [
      {
        url: 'https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kit Body Paint Para Embarazadas: Todo Para Pintar Tu Barriga en Casa | Croko',
    description: 'Kit completo con pinturas hipoalergénicas, 3 plantillas, pinceles y tutorial. Envío gratis Colombia',
    images: ['https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg'],
  },
  other: {
    'itemProp:name': 'Kit Body Paint Para Embarazadas | Croko',
    'itemProp:description': 'Kit completo para pintar barriga de embarazada en casa. Incluye pinturas hipoalergénicas, 3 plantillas, pinceles y tutoriales paso a paso',
    'itemProp:image': 'https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg',
  },
};

export default function KitLayout({ children }) {
  return (
    <>
      <link rel="preload" href="/assets/fonts/fontawesome-webfont.woff2?v=4.7.0" as="font" type="font/woff2" crossOrigin="anonymous" />
      {children}
    </>
  );
}
