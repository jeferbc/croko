export const metadata = {
  title: 'Belly Painting Profesional a Domicilio en Medellín | Artista Croko 2025',
  description: '¿Buscas pintar tu barriga de embarazada en Medellín? Sesión profesional a domicilio con artista especializada. Diseños únicos, pinturas seguras y fotos incluidas. Reserva ahora',
  keywords: 'Belly painting Medellín, maquillaje embarazada Medellín domicilio, pintar barriga embarazada Medellín, artista maquillaje prenatal, belly painting profesional Colombia, barriguitas pintadas Medellín, maquillaje corporal embarazadas',
  openGraph: {
    url: 'https://www.maquillajeembarazadas.com/servicio',
    type: 'website',
    title: 'Belly Painting Profesional a Domicilio en Medellín | Artista Croko',
    description: '¿Buscas pintar tu barriga de embarazada en Medellín? Sesión profesional a domicilio con artista especializada. Diseños únicos, pinturas seguras y fotos incluidas.',
    images: [
      {
        url: 'https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Belly Painting Profesional a Domicilio en Medellín | Artista Croko',
    description: '¿Buscas pintar tu barriga de embarazada en Medellín? Sesión profesional a domicilio con artista especializada. Diseños únicos, pinturas seguras y fotos incluidas.',
    images: ['https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg'],
  },
  other: {
    'itemProp:name': 'Belly Painting Profesional Medellín | Croko',
    'itemProp:description': 'Sesión profesional de belly painting a domicilio en Medellín. Artista especializada con pinturas seguras para embarazadas.',
    'itemProp:image': 'https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg',
  },
};

export default function ServicioLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Croko Maquillaje Embarazadas - Servicio Profesional",
            "image": "https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg",
            "description": "Servicio profesional de belly painting a domicilio en Medellín. Artista especializada en maquillaje prenatal para embarazadas.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Medellín",
              "addressRegion": "Antioquia",
              "addressCountry": "CO"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "6.2476",
              "longitude": "-75.5658"
            },
            "url": "https://www.maquillajeembarazadas.com/servicio",
            "telephone": "+573168161717",
            "priceRange": "$$",
            "areaServed": {
              "@type": "City",
              "name": "Medellín"
            },
            "serviceType": "Belly Painting Profesional",
            "provider": {
              "@type": "Person",
              "name": "Carolina Rincón"
            }
          })
        }}
      />
      {children}
    </>
  );
}
