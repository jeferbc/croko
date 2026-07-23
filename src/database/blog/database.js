const { BlogData } = require('./blog_database');

// Hidden from the homepage carousel only (Meta ads appeal - health-related content).
// They must stay listed on /blog so they keep internal links and remain indexable.
const carouselHiddenSlugs = ['salud-mental-embarazo-croko-tranquilamente', 'maquillaje-para-embarazadas'];

// Transform the blog data for the grid component
const toCard = (blog) => {
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
};

// Full list for the /blog index page
export const BlogIndexData = BlogData.map(toCard);

// Filtered list for the homepage carousel
export const BlogsData = BlogData.filter(blog => !carouselHiddenSlugs.includes(blog.slug)).map(toCard);
