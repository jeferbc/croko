import { BlogData } from '@/database/blog/blog_database'

const post = BlogData.find(p => p.slug === 'salud-mental-embarazo-croko-tranquilamente')

export const metadata = {
  title: `${post?.title || 'Blog'} | Maquillajes Embarazadas`,
  description: post?.description || '',
  alternates: {
    canonical: 'https://www.croko.co/blog/salud-mental-embarazo-croko-tranquilamente',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: 'https://www.croko.co/blog/salud-mental-embarazo-croko-tranquilamente',
    title: post?.title || '',
    description: post?.description || '',
    images: [post?.image || ''],
  },
};

export default function SaludMentalLayout({ children }) {
  return children;
}
