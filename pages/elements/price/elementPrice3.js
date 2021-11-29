import React from 'react'
import PricingThree from './element/price3'
import { Container } from 'reactstrap'
const ElementPriceThree = () => (
    <section className="wedding blog agency pricing inner-pagetitle" id="pricing">
        <Container>
            <div className="title">
                <img alt="" className="img-fluid title-img"
                    src="/assets/images/wedding-img/bottom.png" />
                <div className="main-title">
                    <h2 className="gradient-text">Planes</h2>
                </div>
            </div>
            <PricingThree />
        </Container>
    </section>
)


export default ElementPriceThree;