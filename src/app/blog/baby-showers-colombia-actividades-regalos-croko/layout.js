import { BlogData } from '@/database/blog/blog_database'

const post = BlogData.find(p => p.slug === 'baby-showers-colombia-actividades-regalos-croko')

export const metadata = {
  title: `${post?.title || 'Blog'} | Maquillajes Embarazadas`,
  description: post?.description || '',
  alternates: {
    canonical: 'https://www.croko.co/blog/baby-showers-colombia-actividades-regalos-croko',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: 'https://www.croko.co/blog/baby-showers-colombia-actividades-regalos-croko',
    title: post?.title || '',
    description: post?.description || '',
    images: [post?.image || ''],
  },
  twitter: {
    card: 'summary_large_image',
    title: post?.title || '',
    description: post?.description || '',
    images: [post?.image || ''],
  },
};

export default function BabyShowersLayout({ children }) {
  return children;
}
