import React from 'react'
import Title from '../common/title';
import PricingThree from './element/price3'
import { Container } from 'reactstrap'
const ElementPriceThree = () => (
    <section className="agency pricing inner-pagetitle" id="pricing">
        <Container>
            <div className="title">
                <img alt="" className="img-fluid title-img"
                    src="/assets/images/wedding-img/bottom.png" />
                <div className="main-title">
                    <h2 className="gradient-text">Precios</h2>
                </div>
            </div>
            <PricingThree />
        </Container>
    </section>
)


export default ElementPriceThree;