'use client'
import React from 'react'
import BlogDetail from '@/containers/blog/blog-detail'
import { BlogData } from '@/database/blog/blog_database'

export default function BabyShowersPost() {
    const post = BlogData.find(p => p.slug === 'baby-showers-colombia-actividades-regalos-croko')

    return <BlogDetail post={post} />
}
