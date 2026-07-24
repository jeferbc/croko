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
        answer: 'El baby blues afecta a cerca de 8 de cada 10 mamás, aparece a las 48-72 horas del parto y desaparece solo en máximo dos semanas. La depresión posparto dura más de dos semanas, es más profunda e interfiere con la vida diaria y el vínculo con el bebé; requiere acompañamiento profesional.'
    },
    {
        question: '¿Cuándo debo buscar ayuda profesional?',
        answer: 'Si los síntomas duran más de dos semanas, empeoran, o hay culpa constante, dificultad para vincularse con el bebé o pensamientos de hacerse daño. En este último caso hay que buscar ayuda de inmediato (Línea 106 en Colombia).'
    },
    {
        question: '¿La depresión posparto se cura?',
        answer: 'Sí. Con psicoterapia (la terapia cognitivo-conductual es tratamiento de primera línea) y, cuando el médico lo indica, medicación segura para el embarazo y la lactancia, la gran mayoría de las mamás se recuperan.'
    },
    {
        question: '¿El estrés de la mamá afecta al bebé?',
        answer: 'El estrés crónico y sostenido se ha asociado con mayor riesgo de parto prematuro y bajo peso al nacer. El estrés ocasional es inevitable y no debe generar culpa; cuidar la salud mental también es cuidado prenatal, y tratarse reduce esos riesgos.'
    }
]

export default function SaludMentalPost() {
    const post = BlogData.find(p => p.slug === SLUG)

    return (
        <>
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
