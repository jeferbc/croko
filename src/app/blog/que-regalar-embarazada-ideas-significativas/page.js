'use client'
import React from 'react'
import BlogDetail from '@/containers/blog/blog-detail'
import { BlogData } from '@/database/blog/blog_database'

export default function QueRegalarEmbarazadaPost() {
    const post = BlogData.find(p => p.slug === 'que-regalar-embarazada-ideas-significativas')

    return <BlogDetail post={post} />
}
