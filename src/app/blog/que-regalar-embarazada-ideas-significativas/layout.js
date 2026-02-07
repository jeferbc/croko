import { BlogData } from '@/database/blog/blog_database'

const post = BlogData.find(p => p.slug === 'que-regalar-embarazada-ideas-significativas')

export const metadata = {
  title: `${post?.title || 'Blog'} | Maquillajes Embarazadas`,
  description: post?.description || '',
  alternates: {
    canonical: 'https://www.croko.co/blog/que-regalar-embarazada-ideas-significativas',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: 'https://www.croko.co/blog/que-regalar-embarazada-ideas-significativas',
    title: post?.title || '',
    description: post?.description || '',
    images: [post?.image || ''],
  },
};

export default function QueRegalarEmbarazadaLayout({ children }) {
  return children;
}
