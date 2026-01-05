'use client'
import React, { useEffect } from 'react'
import { ArticleSchema, FAQPageSchema, BreadcrumbSchema, OrganizationSchema } from '@/components/SchemaMarkup'

export default function SchemaScripts({ post }) {
    // Ensure schemas are only rendered once in the DOM
    useEffect(() => {
        // Remove any duplicate schema scripts
        const schemas = document.querySelectorAll('script[type="application/ld+json"]')
        const seen = new Set()

        schemas.forEach(script => {
            const content = script.textContent
            if (seen.has(content)) {
                script.remove() // Remove duplicates
            } else {
                seen.add(content)
            }
        })
    }, [])

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
