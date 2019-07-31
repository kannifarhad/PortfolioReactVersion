import React from 'react';

import PortfolioItemsList from './Elements/PortfolioItemsList';
import PortfolioHomeHead from './Elements/PortfolioHomeHead';

function HomePortfolio(props){
    let categorySlug = null;
    return (
        <div id="portfolio">
			<div className="portfoliocont">
                <PortfolioHomeHead categories={props.categories} />
                <PortfolioItemsList categorySlug={categorySlug} typeSlug={'portfolio'} languageData={props.languageData}  lang={props.lang} items={props.portfolio} categories={props.categories}/>
            </div>
        </div>
    )
}
export default HomePortfolio;