import React from 'react'
import { ArticleSchema, FAQPageSchema, BreadcrumbSchema, OrganizationSchema } from '@/components/SchemaMarkup'

export default function SchemaScripts({ post }) {
    return (
        <>
            <ArticleSchema
                post={post}
                url="https://www.croko.co/maquillaje-para-embarazadas"
            />
            <FAQPageSchema />
            <BreadcrumbSchema />
            <OrganizationSchema />
        </>
    )
}
