import React from 'react';
import {NavLink} from 'react-router-dom';
import {Helmet} from "react-helmet";
import SochialShare from './Elements/SochialShare';
import PagesHeader from './PagesHeader';

function BlogFull(props) {
        function returnFullstory(){
            return { __html : props.postFull.fullstory }
        }
        return(
            <React.Fragment>
                <PagesHeader categoryList={props.categoryList} category={props.category} categoryChange={props.categoryChange} />

                {(props.postFull != false) ? 
                <React.Fragment>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>{props.postFull.title}</title>
                        <meta name="description" content={props.postFull.shortstory} />
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

export default BlogFull;