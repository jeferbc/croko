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
  title: 'Belly Painting Embarazadas Medellín: Artista Profesional a Domicilio | Croko',
  description: '¿Buscas pintar tu barriga de embarazada en Medellín? Artista profesional va a tu casa con pinturas hipoalergenicas seguras. Crea recuerdos inolvidables con tu familia. Domicilios disponibles',
  keywords: 'Barriguitas pintadas, belly painting Colombia, maquillaje embarazadas, maquillaje prenatal Medellin, pintar barriga embarazada, body paint embarazadas, maquillaje corporal prenatal, belly painting Medellín, maquillaje para embarazadas, artista belly painting',
  openGraph: {
    url: 'https://www.maquillajeembarazadas.com',
    type: 'website',
    title: 'Belly Painting Embarazadas Medellín: Artista Profesional a Domicilio | Croko',
    description: 'Artista profesional va a tu casa en Medellin para pintar tu barriga con pinturas hipoalergenicas seguras. Crea recuerdos inolvidables con tu familia',
    images: ['https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Belly Painting Embarazadas Medellín: Artista Profesional a Domicilio | Croko',
    description: 'Artista profesional va a tu casa en Medellin para pintar tu barriga con pinturas seguras. Crea recuerdos inolvidables',
    images: ['https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg'],
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

        {/* Preload critical background images for LCP */}
        <link
          rel="preload"
          as="image"
          href="https://ik.imagekit.io/ge17f66b4ma/tr:q-60,f-webp,w-800/slider-bg_mKSrnghgQ.jpg?updatedAt=1758993734731"
          media="(max-width: 991px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="https://ik.imagekit.io/ge17f66b4ma/tr:q-70,f-webp/countdown-bg_pgiKvb7Cv.png?updatedAt=1758993722284"
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