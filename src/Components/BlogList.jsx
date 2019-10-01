import React from 'react';
import {Helmet} from "react-helmet";
import { connect } from 'react-redux';
import BlogItemsList from './Elements/BlogItemsList';
import PagesHeader from './PagesHeader';

function  BlogList (props){
    return(
        <React.Fragment>
            <PagesHeader categoryList={props.categoryList} category={props.category} categoryChange={props.categoryChange} />
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.pageInfo.title + ' | ' + props.config.author} </title>
                <meta name="description" content={props.pageInfo.description} />
            </Helmet>
            <div className="projectwrapper">
                <div className="projectcircles"></div>
                <div className="projecttitle"><h1>{props.pageInfo.title}</h1></div>
                <div className="projectstory"><p>{props.pageInfo.description}</p></div>
            </div>

            <div className="blogitemscont">
                <BlogItemsList items={props.postsList} />
            </div>
            <div className="clear"></div>
            
            {(props.postsList.length == 0) ?
                    <div className="blockTitle">
                        <h2>{props.languageData['There is no items here yet :(']}</h2>
                        <p>{props.languageData['Please come back later']}</p>
                    </div> : "" }


            
        </React.Fragment>
    )
}

const mapStateToProps = (store, ownProps) => {
    return {
        config : store.common.config,
        languageData: store.common.translations,
        ...ownProps
    }
};

export default connect(mapStateToProps, null)(BlogList);