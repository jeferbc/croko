import { BlogData } from '@/database/blog/blog_database'

const post = BlogData.find(p => p.slug === 'salud-mental-embarazo-croko-tranquilamente')

export const metadata = {
  title: `${post?.title || 'Blog'} | Maquillajes Embarazadas`,
  description: post?.description || '',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: post?.title || '',
    description: post?.description || '',
    images: [post?.image || ''],
  },
};

export default function SaludMentalLayout({ children }) {
  return children;
}
