'use client'
import React from 'react'
import CenterLogoHeader from '@/containers/common/center-logo-header'
import FooterSection from '@/containers/wedding/footer'
import BlogDetail from '@/containers/blog/blog-detail'
import { BlogData } from '@/database/blog/blog_database'
import SchemaScripts from './SchemaScripts'

export default function MaquillajeParaEmbarazadasPage() {
    const post = BlogData.find(p => p.slug === 'maquillaje-para-embarazadas')

    return (
        <>
            {/* Schema.org Structured Data - Render only once */}
            <SchemaScripts post={post} />

            <div>
                <CenterLogoHeader themeClass="wedding"/>
                <BlogDetail post={post} />
                <FooterSection />
            </div>
        </>
    )
}
