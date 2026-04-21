import { BlogData } from '@/database/blog/blog_database'

const post = BlogData.find(p => p.slug === 'pinta-barriguitas-colombia')

const absoluteImage = post?.image?.startsWith('http')
  ? post.image
  : `https://www.croko.co${post?.image || ''}`

export const metadata = {
  title: `${post?.title || 'Blog'} | Pinta Barriguitas Croko`,
  description: post?.description || '',
  alternates: {
    canonical: 'https://www.croko.co/blog/pinta-barriguitas-colombia',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: 'https://www.croko.co/blog/pinta-barriguitas-colombia',
    title: post?.title || '',
    description: post?.description || '',
    images: [absoluteImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: post?.title || '',
    description: post?.description || '',
    images: [absoluteImage],
  },
};

export default function PintaBarriguitasColombiaLayout({ children }) {
  return children;
}
