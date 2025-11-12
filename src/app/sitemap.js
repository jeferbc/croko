import { BlogData } from '@/database/blog/blog_database'

export default function sitemap() {
  const baseUrl = 'https://www.maquillajeembarazadas.com'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/kit`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  // Landing page - High priority for SEO
  const landingPage = {
    url: `${baseUrl}/maquillaje-para-embarazadas`,
    lastModified: new Date('2025-01-15'),
    changeFrequency: 'monthly',
    priority: 1.0, // Highest priority - targeting #1 keyword
  }

  // Blog posts
  const blogPosts = BlogData.map((post) => {
    // Special handling for the landing page
    if (post.slug === 'maquillaje-para-embarazadas') {
      return null // Skip it here since we added it separately
    }

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date), // Now in ISO format: YYYY-MM-DD
      changeFrequency: 'monthly',
      priority: 0.7,
    }
  }).filter(Boolean) // Remove null entries

  return [
    ...staticPages,
    landingPage,
    ...blogPosts,
  ]
}
