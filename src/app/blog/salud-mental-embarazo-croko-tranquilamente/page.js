import React from 'react'
import BlogDetail from '@/containers/blog/blog-detail'
import { ArticleSchema, BreadcrumbSchema, FAQPageSchema } from '@/components/SchemaMarkup'
import { BlogData } from '@/database/blog/blog_database'

const SLUG = 'salud-mental-embarazo-croko-tranquilamente'
const URL = `https://www.croko.co/blog/${SLUG}`

// Mirrors the visible "Preguntas Frecuentes" section of the post.
const faqQuestions = [
    {
        question: '¿Es normal sentir ansiedad durante el embarazo?',
        answer: 'Sí, hasta cierto punto: la preocupación ocasional es parte de la espera. Pero si la ansiedad es constante, quita el sueño o interfiere con el día a día, ya no es "normal del embarazo": entre el 15% y el 20% de las mujeres experimentan un trastorno de ansiedad o depresión en el periodo perinatal, y es tratable con psicoterapia.'
    },
    {
        question: '¿Cuál es la diferencia entre baby blues y depresión posparto?',
        answer: 'El baby blues afecta hasta a 8 de cada 10 mamás, aparece a las 48-72 horas del parto y por lo general se resuelve solo en un plazo aproximado de dos semanas; si persiste o empeora después de ese plazo, hay que consultar. La depresión posparto dura más de dos semanas, es más profunda e interfiere con la vida diaria y el vínculo con el bebé; requiere acompañamiento profesional.'
    },
    {
        question: '¿Cuándo debo buscar ayuda profesional?',
        answer: 'Si los síntomas duran más de dos semanas, empeoran, o hay culpa constante, dificultad para vincularse con el bebé o pensamientos de hacerse daño. En este último caso hay que buscar ayuda de inmediato: Línea 192 opción 4 (nacional, gratuita, 24 horas), Línea 123 en emergencias, o en Medellín la Línea Amiga Saludable (604) 444 44 48.'
    },
    {
        question: '¿La depresión posparto se cura?',
        answer: 'Sí. Con psicoterapia (la terapia cognitivo-conductual es tratamiento de primera línea) y, cuando el médico lo indica, medicación segura para el embarazo y la lactancia, la gran mayoría de las mamás se recuperan.'
    },
    {
        question: '¿El estrés de la mamá afecta al bebé?',
        answer: 'El estrés crónico y la depresión sin tratar se han asociado con mayor riesgo de parto prematuro y bajo peso al nacer. El estrés ocasional es inevitable y estos son riesgos estadísticos, no destinos; cuidar la salud mental también es cuidado prenatal.'
    }
]

// reviewedBy is a WebPage property (not BlogPosting), so the clinical-review
// signal lives on a MedicalWebPage node. Do not publish while the reviewer
// name is still a placeholder.
const medicalWebPageSchema = (post) => ({
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${URL}#webpage`,
    "url": URL,
    "name": post.title,
    "inLanguage": "es-CO",
    "about": { "@type": "MedicalCondition", "name": "Depresión perinatal y ansiedad en el embarazo" },
    "lastReviewed": "2026-07-24",
    "reviewedBy": {
        "@type": "Person",
        "name": post.reviewedBy,
        "jobTitle": "Psicóloga clínica",
        "worksFor": { "@type": "Organization", "name": "Tranquilamente", "url": "https://www.tranquilamente.co" }
    },
    "mainEntity": { "@id": `${URL}#article` }
})

export default function SaludMentalPost() {
    const post = BlogData.find(p => p.slug === SLUG)

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema(post)).replace(/</g, '\\u003c') }}
            />
            <ArticleSchema post={post} url={URL} />
            <FAQPageSchema questions={faqQuestions} />
            <BreadcrumbSchema
                items={[
                    { name: 'Inicio', item: 'https://www.croko.co' },
                    { name: 'Blog', item: 'https://www.croko.co/blog' },
                    { name: post.title, item: URL }
                ]}
            />
            <BlogDetail post={post} />
        </>
    )
}
