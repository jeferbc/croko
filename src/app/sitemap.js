import { BlogData } from '@/database/blog/blog_database'

const SSR_FIX_DATE = new Date('2026-04-18')

const bumpToSsrFix = (date) => (date < SSR_FIX_DATE ? SSR_FIX_DATE : date)

export default function sitemap() {
  const baseUrl = 'https://www.croko.co'

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date('2026-04-22'),
      images: ['https://ik.imagekit.io/ge17f66b4ma/Fotokitcarrusel%20(1)%20(1)_kduJxCzra.png'],
    },
    {
      url: `${baseUrl}/belly-painting-medellin`,
      lastModified: new Date('2026-04-20'),
      images: ['https://ik.imagekit.io/ge17f66b4ma/download__2__wAfXfpmcS.jpeg'],
    },
    {
      url: `${baseUrl}/carolina-rincon`,
      lastModified: new Date('2026-07-23'),
    },
    {
      url: `${baseUrl}/politica-devoluciones`,
      lastModified: new Date('2026-04-01'),
    },
    {
      url: `${baseUrl}/politica-de-privacidad`,
      lastModified: new Date('2026-04-20'),
    },
    {
      url: `${baseUrl}/terminos-y-condiciones`,
      lastModified: new Date('2026-04-20'),
    },
    {
      url: `${baseUrl}/politica-cookies`,
      lastModified: new Date('2026-04-20'),
    },
  ]

  const landingPage = {
    url: `${baseUrl}/maquillaje-para-embarazadas`,
    lastModified: SSR_FIX_DATE,
  }

  const blogPosts = BlogData
    .filter((post) => post.slug !== 'maquillaje-para-embarazadas')
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: bumpToSsrFix(new Date(post.dateModified || post.date || SSR_FIX_DATE)),
      images: post.image
        ? [post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`]
        : undefined,
    }))

  const blogIndex = {
    url: `${baseUrl}/blog`,
    lastModified: SSR_FIX_DATE,
  }

  return [
    ...staticPages,
    blogIndex,
    landingPage,
    ...blogPosts,
  ]
}
