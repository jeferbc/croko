import React from 'react'
import BlogDetail from '@/containers/blog/blog-detail'
import { ArticleSchema, BreadcrumbSchema, FAQPageSchema } from '@/components/SchemaMarkup'
import { BlogData } from '@/database/blog/blog_database'

const SLUG = 'pinta-barriguitas-colombia'
const URL = `https://www.croko.co/blog/${SLUG}`

// Mirrors the visible "Preguntas que me hacen siempre" section of the post.
const faqQuestions = [
    {
        question: '¿Es seguro pintar la barriguita durante el embarazo?',
        answer: 'Sí, siempre que se usen pinturas cosméticas a base de agua, hipoalergénicas, sin interruptores endocrinos, formuladas para aplicación en piel. En once años y más de 800 sesiones no hemos tenido un caso de alergia. No se recomienda pintura acrílica ni pintacaritas de la calle, no tanto por peligro como por incomodidad y acabado pobre.'
    },
    {
        question: '¿A qué mes del embarazo se puede pintar la barriguita?',
        answer: 'Idealmente entre la semana 24 (mes 6) y la semana 34 (mes 8). Antes, la respuesta del bebé no es visible aún para quienes acompañan. Después, muchas mamás se sienten menos cómodas con su cuerpo para la experiencia. Cada mujer decide su momento.'
    },
    {
        question: '¿Cuánto dura una sesión de pinta barriguitas?',
        answer: 'Alrededor de dos horas. No es una carrera, es un ritual.'
    },
    {
        question: '¿Cuánto cuesta pintar la barriguita en Colombia?',
        answer: 'La sesión profesional presencial con Carolina en Medellín arranca desde $600.000 COP. El Kit Croko, para vivir la experiencia en casa en cualquier ciudad, cuesta $190.000 COP con envío incluido. En el país, los servicios profesionales suelen estar entre $400.000 y $800.000 COP.'
    },
    {
        question: '¿Duelen las pinturas? ¿Pican?',
        answer: 'No. Las pinturas cosméticas profesionales se sienten frescas sobre la piel, casi como un masaje suave con pincel. La mayoría de los bebés se animan durante la sesión y empiezan a saltar por la estimulación.'
    },
    {
        question: '¿Se puede hacer pinta barriguitas en casa, sin saber dibujar?',
        answer: 'Sí. Para eso existe el Kit Croko, el primer kit pinta barriguitas creado en Colombia, lanzado en diciembre de 2021. Trae plantillas que guían el diseño y un tutorial en video, así que no hace falta experiencia artística previa.'
    },
    {
        question: '¿Cómo se quita la pintura después?',
        answer: 'Con agua, sola. Puede ser fría o tibia. No se necesita jabón especial ni productos adicionales.'
    },
    {
        question: '¿Por qué regalar una sesión o un kit para un baby shower?',
        answer: 'Porque es uno de los pocos regalos que se vive en el momento y que queda para siempre. Las fotos son un recuerdo, pero la experiencia compartida es algo que nadie más puede regalar. Y es una actividad que integra a todas las generaciones del evento.'
    },
    {
        question: '¿Por qué elegir a Carolina de Croko?',
        answer: 'Lleva más de una década dedicada exclusivamente a pintar barriguitas. Es microbióloga de la Universidad de Antioquia, lo que la hace especialmente cuidadosa con los materiales. No repite diseños, porque cada familia tiene una historia distinta que contar. Y creó el primer Kit Pinta Barriguitas de Colombia.'
    }
]

export default function PintaBarriguitasColombiaPost() {
    const post = BlogData.find(p => p.slug === SLUG)
    const postForSchema = post
        ? {
            ...post,
            image: post.image?.startsWith('http')
                ? post.image
                : `https://www.croko.co${post.image}`,
        }
        : post

    return (
        <>
            <ArticleSchema post={postForSchema} url={URL} />
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
