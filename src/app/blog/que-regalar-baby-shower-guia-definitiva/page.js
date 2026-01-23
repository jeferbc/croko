'use client'
import React from 'react'
import BlogDetail from '@/containers/blog/blog-detail'
import { BlogData } from '@/database/blog/blog_database'

export default function QueRegalarBabyShowerPost() {
    const post = BlogData.find(p => p.slug === 'que-regalar-baby-shower-guia-definitiva')

    return <BlogDetail post={post} />
}
