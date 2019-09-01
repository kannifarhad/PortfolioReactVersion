import React from 'react';
import {NavLink} from 'react-router-dom';
import {Helmet} from "react-helmet";
import SochialShare from './Elements/SochialShare';

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeSlug: this.props.match.params.type,
            categorySlug: this.props.match.params.category,
            postsFull: null,
        }
    }

    render() {
        let _this = this;
        function returnFullstory(){
            return { __html : _this.props.postFull.fullstory }
        }
        return(
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.props.postFull.title}</title>
                    <meta name="description" content={this.props.postFull.shortstory} />
                </Helmet>
                <div className="projectwrapper">
                    <div className="projectcircles"></div>
                    <div className="projecttitle"><h1>{this.props.postFull.title}</h1></div>
                    <div className="projectstory"><p>{this.props.postFull.shortstory}</p></div>
                </div>
                <SochialShare {...this.props} />
                <div className="projectfull">
                    <div className="articlecontent" dangerouslySetInnerHTML={returnFullstory()}>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioPage;