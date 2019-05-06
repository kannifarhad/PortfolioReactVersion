import React from 'react';

import PortfolioList from './Elements/PortfolioList';
import PortfolioHead from './Elements/PortfolioHead';

function HomePortfolio(props){
    return (
        <div id="portfolio">
			<div className="portfoliocont">
                <PortfolioHead categories={props.categories} />
                <PortfolioList items={props.portfolio} categories={props.categories}/>
            </div>
        </div>
    )
}
export default HomePortfolio;