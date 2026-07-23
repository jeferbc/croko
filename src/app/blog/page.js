import React from "react";
import { Container, Row, Col } from "reactstrap";
import CardWrapper from "@/containers/blog/card/grid-wrapper";
import { BlogIndexData } from "@/database/blog/database";
import SectionTitle from "@/components/SectionTitle";

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.croko.co/blog#collectionpage",
  "url": "https://www.croko.co/blog",
  "name": "Blog Croko",
  "description": "Artículos sobre belly painting, baby showers, embarazo y maternidad.",
  "inLanguage": "es-CO",
  "isPartOf": { "@id": "https://www.croko.co/#website" },
  "publisher": { "@id": "https://www.croko.co/#organization" },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": BlogIndexData.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://www.croko.co${post.readUrl}`,
      "name": post.title
    }))
  }
};

const BlogIndex = () => {
  return (
    <section className="wedding blog blog-sec section-b-space">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema).replace(/</g, '\\u003c') }}
      />
      <Container>
        <Row>
          <Col md="8" className="offset-md-2">
            <SectionTitle title="Blog" as="h1" showImage={false} />
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: '50px' }}>
        <Row>
          {BlogIndexData.length > 0 ? (
            BlogIndexData.map((item, index) => (
              <CardWrapper
                key={`blog-${index}`}
                className="col-lg-4 col-md-6 col-sm-12 mb-4"
                image={item.image}
                blogDate={item.createdAt}
                place={item.place}
                title={item.title}
                description={item.description}
                readUrl={item.readUrl}
              />
            ))
          ) : (
            <Col>
              <p className="text-center">No se encontraron publicaciones</p>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default BlogIndex;
