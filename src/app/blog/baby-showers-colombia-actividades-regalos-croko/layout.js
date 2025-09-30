import { BlogData } from '@/database/blog/blog_database'

const post = BlogData.find(p => p.slug === 'baby-showers-colombia-actividades-regalos-croko')

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

export default function BabyShowersLayout({ children }) {
  return children;
}
