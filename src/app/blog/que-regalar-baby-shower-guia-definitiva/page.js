'use client'
import React from 'react'
import CenterLogoHeader from '@/containers/common/center-logo-header'
import FooterSection from '@/containers/wedding/footer'
import BlogDetail from '@/containers/blog/blog-detail'
import { BlogData } from '@/database/blog/blog_database'

export default function QueRegalarBabyShowerPost() {
    const post = BlogData.find(p => p.slug === 'que-regalar-baby-shower-guia-definitiva')

    return (
        <div>
            <CenterLogoHeader themeClass="wedding"/>
            <BlogDetail post={post} />
            <FooterSection />
        </div>
    )
}
