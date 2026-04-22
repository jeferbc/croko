import "../index.scss";
import ClientLayout from "./ClientLayout";
import { Poppins, Capriola, Satisfy, Alex_Brush, Raleway, Work_Sans } from 'next/font/google';

// Optimize Google Fonts with next/font
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
});

const capriola = Capriola({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-capriola'
});

const satisfy = Satisfy({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-satisfy'
});

const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-alex-brush'
});

const raleway = Raleway({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway'
});

const workSans = Work_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans'
});


export const metadata = {
  title: 'Kit Pinta Barriguitas | Pintura Barriga Embarazada | Croko',
  description: 'Pinta tu barriga en casa con 15 colores hipoalergénicos, plantillas y videotutoriales. Envío gratis en Colombia. +500 familias felices. Ideal para baby shower.',
  keywords: 'kit pinta barriguitas, kit pintabarriguitas, kit pinta barriguita, pintabarriguitas, pintura barriga embarazada, kit belly painting, pinturas embarazadas, body paint embarazo, pintar barriguita, envío gratis Colombia, donde comprar pintura para pintar barriga embarazada, pinturas para pintar la barriga, pintura para embarazadas, pinturas para belly painting, pinturas para tripa embarazada',
  alternates: {
    canonical: 'https://www.croko.co/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: 'https://www.croko.co',
    type: 'website',
    title: 'Kit Pinta Barriguitas | Pintura Barriga Embarazada | Croko',
    description: 'Kit completo para pintar tu barriguita. Pinturas seguras + plantillas + tutorial. Envío gratis Colombia.',
    images: [
      {
        url: 'https://ik.imagekit.io/ge17f66b4ma/Kit%20foto%20690x551_2rLNnbXrzh.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kit Pinta Barriguitas | Pintura Barriga Embarazada | Croko',
    description: 'Kit completo para pintar tu barriguita. Pinturas seguras + plantillas. Envío gratis.',
    images: ['https://ik.imagekit.io/ge17f66b4ma/Kit%20foto%20690x551_2rLNnbXrzh.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${capriola.variable} ${satisfy.variable} ${alexBrush.variable} ${raleway.variable} ${workSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="mdx-docs" />
        <link rel="icon" href="/assets/images/logo/favicon.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/assets/images/logo/favicon.png" type="image/x-icon" />

        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://ik.imagekit.io" />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />

        {/* Preload Font Awesome for faster icon rendering */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/assets/fonts/fontawesome-webfont.woff2?v=4.7.0"
          crossOrigin="anonymous"
        />

        {/* Preload header images for LCP optimization */}
        <link
          rel="preload"
          as="image"
          href="https://ik.imagekit.io/ge17f66b4ma/family_header_cz4Hj1SWB.png?tr=w-400,q-75,f-webp"
          media="(max-width: 991px)"
          fetchPriority="high"
          imageSrcSet="https://ik.imagekit.io/ge17f66b4ma/family_header_cz4Hj1SWB.png?tr=w-320,q-75,f-webp 320w, https://ik.imagekit.io/ge17f66b4ma/family_header_cz4Hj1SWB.png?tr=w-400,q-75,f-webp 400w, https://ik.imagekit.io/ge17f66b4ma/family_header_cz4Hj1SWB.png?tr=w-600,q-75,f-webp 600w"
          imageSizes="(max-width: 991px) 100vw, 600px"
        />
        <link
          rel="preload"
          as="image"
          href="https://ik.imagekit.io/ge17f66b4ma/family_header_cz4Hj1SWB.png?tr=w-800,q-75,f-webp"
          media="(min-width: 992px)"
          fetchPriority="high"
        />

        {/* Preload critical background images for LCP */}
        <link
          rel="preload"
          as="image"
          href="https://ik.imagekit.io/ge17f66b4ma/tr:q-40,f-webp,w-800/slider-bg_mKSrnghgQ.jpg?updatedAt=1758993734731"
          media="(max-width: 991px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="https://ik.imagekit.io/ge17f66b4ma/tr:q-40,f-webp/countdown-bg_pgiKvb7Cv.png?updatedAt=1758993722284"
          media="(min-width: 992px)"
          fetchPriority="high"
        />
      </head>
      <body className={`try ${poppins.className}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}