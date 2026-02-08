import { BlogData } from '@/database/blog/blog_database'

const post = BlogData.find(p => p.slug === 'maquillaje-para-embarazadas')

export const metadata = {
  title: 'Maquillaje Seguro Para Embarazadas: Guía Completa 2026 | Maquillajes Embarazadas',
  description: 'Guía completa sobre maquillaje seguro durante el embarazo. Descubre qué productos usar, ingredientes a evitar y opciones hipoalergénicas para cuidar tu belleza prenatal.',
  keywords: 'maquillaje para embarazadas, maquillaje seguro embarazo, cosméticos embarazo, productos belleza prenatal, maquillaje hipoalergénico embarazadas',
  alternates: {
    canonical: 'https://www.croko.co/maquillaje-para-embarazadas',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: 'https://www.croko.co/maquillaje-para-embarazadas',
    type: 'article',
    title: 'Maquillaje Seguro Para Embarazadas: Guía Completa 2026',
    description: 'Guía completa sobre maquillaje seguro durante el embarazo. Descubre qué productos usar, ingredientes a evitar y opciones hipoalergénicas.',
    images: [post?.image || 'https://ik.imagekit.io/ge17f66b4ma/maquillaje_seguro_JvfI7NhUL.jpeg?updatedAt=1762875465512'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maquillaje Seguro Para Embarazadas: Guía Completa 2026',
    description: 'Guía completa sobre maquillaje seguro durante el embarazo. Descubre qué productos usar, ingredientes a evitar y opciones hipoalergénicas.',
    images: [post?.image || 'https://ik.imagekit.io/ge17f66b4ma/maquillaje_seguro_JvfI7NhUL.jpeg?updatedAt=1762875465512'],
  },
};

export default function MaquillajeParaEmbarazadasLayout({ children }) {
  return children;
}
