import React from 'react'
import Title from '../common/title';
import PricingThree from './element/price3'
import { Container } from 'reactstrap'
const ElementPriceThree = () => (
    <section className="agency pricing inner-pagetitle" id="pricing">
        <Container>
            <Title heading="Precios" />
            <PricingThree />
        </Container>
    </section>
)


export default ElementPriceThree;