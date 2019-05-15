import React from 'react';

import PortfolioItemsList from './Elements/PortfolioItemsList';
import PortfolioHomeHead from './Elements/PortfolioHomeHead';

function HomePortfolio(props){
    return (
        <div id="portfolio">
			<div className="portfoliocont">
                <PortfolioHomeHead categories={props.categories} />
                <PortfolioItemsList languageData={props.languageData} items={props.portfolio} categories={props.categories}/>
            </div>
        </div>
    )
}
export default HomePortfolio;