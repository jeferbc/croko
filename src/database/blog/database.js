const { BlogData } = require('./blog_database');

// Transform the blog data for the grid component
export const BlogsData = BlogData.map(blog => ({
  id: blog.id,
  title: blog.title,
  slug: blog.slug,
  image: blog.image,
  description: blog.description,
  createdAt: blog.date,
  place: 'Blog',
  readUrl: `/blog/${blog.slug}`,
  author: blog.author
}));
