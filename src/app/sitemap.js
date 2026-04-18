import { BlogData } from '@/database/blog/blog_database'

export default function sitemap() {
  const baseUrl = 'https://www.croko.co'

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date('2026-04-18'),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/belly-painting-medellin`,
      lastModified: new Date('2026-04-18'),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-04-18'),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/politica-devoluciones`,
      lastModified: new Date('2025-10-01'),
      priority: 0.3,
    },
  ]

  const landingPage = {
    url: `${baseUrl}/maquillaje-para-embarazadas`,
    lastModified: new Date('2025-11-12'),
    priority: 0.8,
  }

  const blogPosts = BlogData.map((post) => {
    if (post.slug === 'maquillaje-para-embarazadas') {
      return null
    }

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date('2025-10-02'),
      priority: 0.6,
    }
  }).filter(Boolean)

  return [
    ...staticPages,
    landingPage,
    ...blogPosts,
  ]
}
