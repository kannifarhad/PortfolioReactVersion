import React from 'react';
import {Helmet} from "react-helmet";
import { connect } from 'react-redux';
import PortfolioItemsList from './Elements/PortfolioItemsList';
import PagesHeader from './PagesHeader';

function  PortfolioList (props){
    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.pageInfo.title + ' | ' + props.config.author} </title>
                <meta name="description" content={props.pageInfo.description} />
            </Helmet>

            <PagesHeader categoryList={props.categoryList} category={props.category} categoryChange={props.categoryChange} />

            <div className="projectwrapper">
                <div className="projectcircles"></div>
                <div className="projecttitle"><h1>{props.pageInfo.title}</h1></div>
                <div className="projectstory"><p>{props.pageInfo.description}</p></div>
            </div>

            <div className="projectslist">
                <PortfolioItemsList items={props.postsList} />
            </div>



            <div className="clear"></div>
            
            {(props.postsList.length == 0) ?
                <div className="blockTitle">
                    <h2>{props.languageData['There is no items here yet :(']}</h2>
                    <p>{props.languageData['Please come back later']}</p>
                </div> : "" }
                
        </div>
    )
}

const mapStateToProps = (store, ownProps) => {
    return {
        config : store.common.config,
        languageData: store.common.translations,
        ...ownProps
    }
};
const PortfolioListContainer = connect(mapStateToProps, null)(PortfolioList);

export default PortfolioListContainer;