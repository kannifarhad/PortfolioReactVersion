import React from 'react';
import { connect } from 'react-redux';

function PortfolioHead(props) {
        return(
            <div className="portfoliohead">
                <h1>{props.portfolioInfo.title}</h1>
                <p>{props.portfolioInfo.description}</p>
                <div className="clear"></div>
                <ul className="filters">
                    <li data-filter="portfolio" onClick={() => props.categoryChange('portfolio')} className={(props.category == 'portfolio')? "active" : ""}>{props.languageData['All']}</li>
                    {(typeof props.portfolioInfo['children'] !== 'undefined') ?
                        props.portfolioInfo['children'].map(categorie => <li 
                                key={categorie.id} 
                                onClick={() => props.categoryChange(categorie.slug)} 
                                className={(props.category == categorie.slug)? "active" : ""}
                                data-filter={`.${categorie.slug}`}>{categorie.title} </li>)
                        : ""}
                </ul>
            </div>
        )
    }


const mapStateToProps = (store, ownprops) => {
    return {
        config: store.common.config,
		languageData: store.common.translations,
        posts : store.posts,
        categories: store.categories,
        store,
        ...ownprops, 
    }
};
const ContainerPortfolioHead = connect(mapStateToProps, null)(PortfolioHead);

export default ContainerPortfolioHead;