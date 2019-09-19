import React from 'react';
import {NavLink} from 'react-router-dom';
import {Helmet} from "react-helmet";
import SochialShare from './Elements/SochialShare';

function PortfolioPage (props) {
        function returnFullstory(){
            return { __html : props.postFull.fullstory }
        }
        console.log(props);
        return(
            <React.Fragment>
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
                    <div className="projectfull">
                        <div className="articlecontent" dangerouslySetInnerHTML={returnFullstory()}>
                        </div>
                    </div>
                </React.Fragment>
                : "Loading " }
                                {/* <SochialShare {...this.props} /> */}

            </React.Fragment>
        )
    
}

export default PortfolioPage;