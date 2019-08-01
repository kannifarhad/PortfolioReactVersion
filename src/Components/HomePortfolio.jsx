import React from 'react';

import PortfolioItemsList from './Elements/PortfolioItemsList';
import PortfolioHomeHead from './Elements/PortfolioHomeHead';

function HomePortfolio(props){
    let categorySlug = null;
    
    return (
        <div id="portfolio">
			<div className="portfoliocont">
                <PortfolioHomeHead  store={props.store} />
                <PortfolioItemsList store={props.store} categorySlug={categorySlug} typeSlug={'portfolio'} items={props.portfolio} />
            </div>
        </div>
    )
}
export default HomePortfolio;