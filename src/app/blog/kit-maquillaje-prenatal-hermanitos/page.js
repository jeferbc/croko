'use client'
import React from 'react'
import BlogDetail from '@/containers/blog/blog-detail'
import { BlogData } from '@/database/blog/blog_database'

export default function KitMaquillajePost() {
    const post = BlogData.find(p => p.slug === 'kit-maquillaje-prenatal-hermanitos')

    return <BlogDetail post={post} />
}
