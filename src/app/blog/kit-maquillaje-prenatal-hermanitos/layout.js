import { BlogData } from '@/database/blog/blog_database'

const post = BlogData.find(p => p.slug === 'kit-maquillaje-prenatal-hermanitos')

export const metadata = {
  title: `${post?.title || 'Blog'} | Maquillajes Embarazadas`,
  description: post?.description || '',
  alternates: {
    canonical: 'https://www.croko.co/blog/kit-maquillaje-prenatal-hermanitos',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: 'https://www.croko.co/blog/kit-maquillaje-prenatal-hermanitos',
    title: post?.title || '',
    description: post?.description || '',
    images: [post?.image || ''],
  },
};

export default function KitMaquillajeLayout({ children }) {
  return children;
}
