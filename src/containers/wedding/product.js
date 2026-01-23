'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import {Container,Row,Col} from 'reactstrap'
import Counter from '@/components/Counter';
import { TrustBadgesData } from '@/data/trustBadges';
import PurchaseButton from '@/components/PurchaseModal/PurchaseButton';

const ProductCarousel = dynamic(() => import('@/containers/elements/productCarousel'), {
    loading: () => <div style={{ minHeight: '551px', backgroundColor: '#f5f5f5' }} />
});

const ContactButtonStyles = {
    a: {
        display: "inline-flex",
        width: "100%",
        justifyContent: "center"
    },
    p: {
        animation: 'none'
    }
}
const ProductSection = () => (
  <section className="wedding" id="product">
    <Container>
        <Row>
            <Col lg="6">
                <ProductCarousel />
            </Col>
            <Col lg="6">
                <div className="blog agency pricing inner-pagetitle pt-4 pt-lg-0">
                    <div className="price-container price-margin shadows bg-white text-left mb-sm-0">
                        <div className="price-feature-container set-relative" style={{ textAlign: 'left' }}>
                            <h2 className="feature-text-heading text-center bold text-uppercase pb-3" style={{ color: '#c0882f' }}>Pinturas seguras para embarazadas</h2>
                            <h3 className="feature-text-heading bold pb-2">Descripción</h3>
                            <p className="price-feature"><strong>Imagina crear un recuerdo único de tu embarazo junto a tu familia.</strong></p>
                            <p className="price-feature" style={{ marginBottom: '0.5rem' }}>El Kit Pinta Barriguita incluye todo para una experiencia inolvidable:</p>
                            <div style={{ color: '#7e7e7e', marginBottom: '1.5rem' }}>
                                <p style={{ margin: '0.25rem 0' }}><span style={{ color: '#c0882f' }}>✓</span> 4 plantillas de diseño</p>
                                <p style={{ margin: '0.25rem 0' }}><span style={{ color: '#c0882f' }}>✓</span> 1 plantilla personalizada con el nombre de tu bebé</p>
                                <p style={{ margin: '0.25rem 0' }}><span style={{ color: '#c0882f' }}>✓</span> 4 pinceles profesionales</p>
                                <p style={{ margin: '0.25rem 0' }}><span style={{ color: '#c0882f' }}>✓</span> Pinturas corporales 100% seguras para ti y tu bebé</p>
                                <p style={{ margin: '0.25rem 0' }}><span style={{ color: '#c0882f' }}>✓</span> Videos guía paso a paso</p>
                            </div>
                            <h3 className="feature-text-heading text-center pb-3">Envío incluido a todo Colombia</h3>
                            <div className="price-value mb-3">
                                <div className="price text-center">$<span className="large">150.000</span></div>
                            </div>
                            <div className="text-center">
                                <PurchaseButton className="btn btn-default btn-white purchase-kit">Comprar</PurchaseButton>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    <Counter data={TrustBadgesData} />
  </section>
)

export default ProductSection;