import React from 'react';
import { connect } from 'react-redux';
import {Helmet} from "react-helmet";
import SochialShare from './Elements/SochialShare';
import PagesHeader from './PagesHeader';

function PortfolioPage (props) {
        function returnFullstory(){
            return { __html : props.postFull.fullstory }
        }
        let currentLang = props.langList.filter(lang => { return lang.slug == props.config.lang})[0];
        
        return(
            <React.Fragment>
                <PagesHeader categoryList={props.categoryList} category={props.category} categoryChange={props.categoryChange} />

                {(props.postFull != false) ? 
                <React.Fragment>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>{`${props.postFull.title} - ${props.pageInfo.title} | ${currentLang.sitetitle}`}</title>
                        <meta name="description" content={props.postFull.shortstory} />
                        <meta name="og:title" content={props.postFull.title} />
                        <meta name="og:description" content={props.postFull.shortstory} />
                        <meta name="og:image" content={props.postFull.thumb_image} />
                        <meta name="og:url" content={window.location.href} />
                    </Helmet>
                    <div className="projectwrapper">
                        <div className="projectcircles"></div>
                        <div className="projecttitle"><h1>{props.postFull.title}</h1></div>
                        <div className="projectstory"><p>{props.postFull.shortstory}</p></div>
                    </div>
                    <SochialShare />

                    <div className="projectfull">
                        <div className="articlecontent" dangerouslySetInnerHTML={returnFullstory()}>
                        </div>
                    </div>
                </React.Fragment>
                : "Loading " }

            </React.Fragment>
        )
    
}
const mapStateToProps = (store, ownProps) => {
    return {
        config : store.common.config,
        langList: store.common.langList,
        languageData: store.common.translations,
        ...ownProps
    }
};

export default connect(mapStateToProps, null)(PortfolioPage);