import { BlogData } from '@/database/blog/blog_database'

const post = BlogData.find(p => p.slug === 'que-regalar-baby-shower-guia-definitiva')

export const metadata = {
  title: `${post?.title || 'Blog'} | Maquillajes Embarazadas`,
  description: post?.description || '',
  alternates: {
    canonical: 'https://www.croko.co/blog/que-regalar-baby-shower-guia-definitiva',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: 'https://www.croko.co/blog/que-regalar-baby-shower-guia-definitiva',
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

export default function QueRegalarBabyShowerLayout({ children }) {
  return children;
}
