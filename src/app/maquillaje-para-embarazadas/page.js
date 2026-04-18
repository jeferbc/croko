import React from 'react'
import BlogDetail from '@/containers/blog/blog-detail'
import { BlogData } from '@/database/blog/blog_database'
import SchemaScripts from './SchemaScripts'

export default function MaquillajeParaEmbarazadasPage() {
    const post = BlogData.find(p => p.slug === 'maquillaje-para-embarazadas')

    return (
        <>
            <SchemaScripts post={post} />
            <BlogDetail post={post} />
        </>
    )
}
