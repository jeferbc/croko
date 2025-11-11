'use client'
import React from 'react'
import Head from 'next/head'
import CenterLogoHeader from '@/containers/common/center-logo-header'
import FooterSection from '@/containers/wedding/footer'
import BlogDetail from '@/containers/blog/blog-detail'
import { BlogData } from '@/database/blog/blog_database'
import { ArticleSchema, FAQPageSchema, BreadcrumbSchema, OrganizationSchema } from '@/components/SchemaMarkup'

export default function MaquillajeParaEmbarazadasPage() {
    const post = BlogData.find(p => p.slug === 'maquillaje-para-embarazadas')

    return (
        <>
            {/* Schema.org Structured Data */}
            <ArticleSchema
                post={post}
                url="https://www.maquillajeembarazadas.com/maquillaje-para-embarazadas"
            />
            <FAQPageSchema />
            <BreadcrumbSchema />
            <OrganizationSchema />

            <div>
                <CenterLogoHeader themeClass="wedding"/>
                <BlogDetail post={post} />
                <FooterSection />
            </div>
        </>
    )
}
