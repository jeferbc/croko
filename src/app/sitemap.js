import { BlogData } from '@/database/blog/blog_database'

export default function sitemap() {
  const baseUrl = 'https://www.croko.co'

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date('2026-04-22'),
    },
    {
      url: `${baseUrl}/belly-painting-medellin`,
      lastModified: new Date('2026-04-20'),
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
    lastModified: new Date('2025-11-12'),
  }

  const blogPosts = BlogData
    .filter((post) => post.slug !== 'maquillaje-para-embarazadas')
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date('2025-10-02'),
    }))

  const latestBlogDate = BlogData.reduce((latest, post) => {
    if (!post.date) return latest
    const postDate = new Date(post.date)
    return postDate > latest ? postDate : latest
  }, new Date('2025-10-02'))

  const blogIndex = {
    url: `${baseUrl}/blog`,
    lastModified: latestBlogDate,
  }

  return [
    ...staticPages,
    blogIndex,
    landingPage,
    ...blogPosts,
  ]
}
