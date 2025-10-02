"use client";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import CardWrapper from "@/containers/blog/card/grid-wrapper";
import { BlogsData } from "@/database/blog/database";
import SectionTitle from "@/components/SectionTitle";

const BlogIndex = () => {
  return (
    <section className="wedding blog blog-sec" style={{ marginTop: '150px' }}>
      <Container>
        <Row>
          <Col md="8" className="offset-md-2">
            <SectionTitle title="Blog" />
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: '50px' }}>
        <Row>
          {BlogsData.length > 0 ? (
            BlogsData.map((item, index) => (
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
