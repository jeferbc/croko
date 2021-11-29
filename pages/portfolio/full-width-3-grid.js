import React, { Fragment } from 'react';
import BasicPortfolio from '../../containers/portfolio/basic'
import CarouselPortfolio from '../../containers/portfolio/carousel'

const FullWidth3Grid = () => (
    <Fragment>
        <div className="masonry-filter" id='galery'>
            <div className="d-none d-sm-block">
                <BasicPortfolio
                    className="col-md-4 col-sm-6 p-0 isotopeSelector masonary-portfolio"
                    fluid="container-fluid"
                />
            </div>
            <div className="d-sm-none">
                <CarouselPortfolio
                    className="col-md-4 col-sm-6 p-0 isotopeSelector masonary-portfolio"
                    fluid="container-fluid"
                />
            </div>
        </div>
    </Fragment>
)

export default FullWidth3Grid;