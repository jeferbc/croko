import React from 'react'
import PricingThree from './element/price3'
import { Container } from 'reactstrap'
import SectionTitle from '@/components/SectionTitle'
const ElementPriceThree = () => (
    <section className="wedding blog agency pricing inner-pagetitle" id="pricing">
        <Container>
            <SectionTitle title="Planes" />
            <PricingThree />
        </Container>
    </section>
)


export default ElementPriceThree;