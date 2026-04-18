import React from 'react'
import BlogDetail from '@/containers/blog/blog-detail'
import { ArticleSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { BlogData } from '@/database/blog/blog_database'

const SLUG = 'salud-mental-embarazo-croko-tranquilamente'
const URL = `https://www.croko.co/blog/${SLUG}`

export default function SaludMentalPost() {
    const post = BlogData.find(p => p.slug === SLUG)

    return (
        <>
            <ArticleSchema post={post} url={URL} />
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
