import React, { Fragment } from 'react';
import BasicPortfolio from '../../containers/portfolio/basic'

const FullWidth3Grid = () => (
    <Fragment>
        <div className="masonry-filter">
            <BasicPortfolio
                className="col-md-4 col-sm-6 p-0 isotopeSelector masonary-portfolio"
                fluid="container-fluid"
            />
        </div>
    </Fragment>
)

export default FullWidth3Grid;