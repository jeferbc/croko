'use client'
import React from 'react'
import BlogDetail from '@/containers/blog/blog-detail'
import { BlogData } from '@/database/blog/blog_database'

export default function ActividadesBabyShowerPost() {
    const post = BlogData.find(p => p.slug === 'actividades-baby-shower-emotivas-inolvidables')

    return <BlogDetail post={post} />
}
