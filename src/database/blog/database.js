const { BlogData } = require('./blog_database');

// Posts to hide from carousel (for Meta appeal - health-related content)
const hiddenSlugs = ['salud-mental-embarazo-croko-tranquilamente', 'maquillaje-para-embarazadas'];

// Transform the blog data for the grid component
export const BlogsData = BlogData.filter(blog => !hiddenSlugs.includes(blog.slug)).map(blog => {
  // Special handling for landing pages that are not under /blog/
  const readUrl = blog.slug === 'maquillaje-para-embarazadas'
    ? `/maquillaje-para-embarazadas`
    : `/blog/${blog.slug}`;

  return {
    id: blog.id,
    title: blog.title,
    slug: blog.slug,
    image: blog.image,
    description: blog.description,
    createdAt: blog.date,
    place: 'Blog',
    readUrl: readUrl,
    author: blog.author
  };
});
