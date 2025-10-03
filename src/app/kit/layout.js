export const metadata = {
  title: 'Kit maquillaje de embarazadas | Croko',
  description: 'Celebra el embarazo en familia maquillando tu barriguita. Esta actividad familiar permite crear momentos especiales y fortalecer vínculos afectivos mientras celebran el embarazo juntos',
  keywords: 'Maquillaje embarazadas,Maquillaje embarazadas en familia, Maquillaje embarazadas en casa, automaquillaje embarazadas, Maquillaje embarazadas en pareja, maquillaje prenatal en familia, Maquillaje estimulante para embarazadas, estimulación prenatal, maquillaje barriga con amigos, maquillaje barriguita, maquillaje estomago, Body art para embarazadas en casa, pinta barrigas, pinta embarazadas, maquillaje corporal prenatal, maquillaje para embarazadas, maquillaje de embarazo, belly painting',
  openGraph: {
    url: 'https://www.maquillajeembarazadas.com/kit',
    type: 'website',
    title: 'Kit maquillaje de embarazadas | Croko',
    description: 'Celebra el embarazo en familia maquillando tu barriguita. Esta actividad familiar permite crear momentos especiales y fortalecer vínculos afectivos mientras celebran el embarazo juntos',
    images: [
      {
        url: 'https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kit maquillaje de embarazadas | Croko',
    description: 'Celebra el embarazo en familia maquillando tu barriguita. Esta actividad familiar permite crear momentos especiales y fortalecer vínculos afectivos mientras celebran el embarazo juntos',
    images: ['https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg'],
  },
  other: {
    'itemProp:name': 'Kit maquillaje de embarazadas | Croko',
    'itemProp:description': 'Celebra el embarazo en familia maquillando tu barriguita. Esta actividad familiar permite crear momentos especiales y fortalecer vínculos afectivos mientras celebran el embarazo juntos',
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
