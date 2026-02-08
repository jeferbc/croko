export const metadata = {
  title: 'Blog | Maquillajes Embarazadas',
  description: 'Descubre nuestros artículos sobre belly painting, baby showers, embarazo y maternidad.',
  alternates: {
    canonical: 'https://www.croko.co/blog',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: 'https://www.croko.co/blog',
    title: 'Blog | Maquillajes Embarazadas',
    description: 'Descubre nuestros artículos sobre belly painting, baby showers, embarazo y maternidad.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Maquillajes Embarazadas',
    description: 'Descubre nuestros artículos sobre belly painting, baby showers, embarazo y maternidad.',
  },
};

export default function BlogIndexLayout({ children }) {
  return children;
}
