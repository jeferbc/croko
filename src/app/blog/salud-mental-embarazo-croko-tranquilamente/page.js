'use client'
import React from 'react'
import BlogDetail from '@/containers/blog/blog-detail'
import { BlogData } from '@/database/blog/blog_database'

export default function SaludMentalPost() {
    const post = BlogData.find(p => p.slug === 'salud-mental-embarazo-croko-tranquilamente')

    return <BlogDetail post={post} />
}
