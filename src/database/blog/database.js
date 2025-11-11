const { BlogData } = require('./blog_database');

// Transform the blog data for the grid component
export const BlogsData = BlogData.map(blog => {
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
