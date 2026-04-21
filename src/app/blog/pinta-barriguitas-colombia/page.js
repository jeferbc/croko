import React from 'react'
import BlogDetail from '@/containers/blog/blog-detail'
import { ArticleSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { BlogData } from '@/database/blog/blog_database'

const SLUG = 'pinta-barriguitas-colombia'
const URL = `https://www.croko.co/blog/${SLUG}`

export default function PintaBarriguitasColombiaPost() {
    const post = BlogData.find(p => p.slug === SLUG)
    const postForSchema = post
        ? {
            ...post,
            image: post.image?.startsWith('http')
                ? post.image
                : `https://www.croko.co${post.image}`,
        }
        : post

    return (
        <>
            <ArticleSchema post={postForSchema} url={URL} />
            <BreadcrumbSchema
                items={[
                    { name: 'Inicio', item: 'https://www.croko.co' },
                    { name: 'Blog', item: 'https://www.croko.co/blog' },
                    { name: post.title, item: URL }
                ]}
            />
            <BlogDetail post={post} />
        </>
    )
}
