import React from 'react'
import Head from 'next/head'
import CenterLogoHeader from '../../containers/common/center-logo-header'
import FooterSection from '../layouts/sections/wedding/footer'
import BlogDetail from '../../containers/blog/blog-detail'
import { BlogData } from '../../database/blog/blog_database'

const BlogPost = ({ post }) => {
    return (
        <div>
            <Head>
                <title>{post.title} | Maquillajes Embarazadas</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content={post.description}/>
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.description} />
                <meta property="og:image" content={post.image} />
            </Head>

            <CenterLogoHeader themeClass="wedding"/>

            <BlogDetail post={post} />

            <FooterSection />
        </div>
    )
}

export async function getStaticPaths() {
    const paths = BlogData.map((post) => ({
        params: { slug: post.slug }
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const post = BlogData.find((post) => post.slug === params.slug)

    if (!post) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post,
        },
    }
}

export default BlogPost