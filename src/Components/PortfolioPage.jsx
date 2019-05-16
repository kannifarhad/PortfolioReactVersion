import React from 'react';
import {NavLink} from 'react-router-dom';

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

    // componentWillMount() {
    //     this.getPostsList();
    // }
    // componentDidUpdate(prevProps) {
    //     if(prevProps.pageInfo.slug !== this.props.pageInfo.slug) {
    //         this.getPostsList();
    //     }
    // }
    // getPostsList() {
    //     /*axios.get('http://api.kanni.loc/main')
    //         .then(response => response.data())
    //         .then(test => this.setState({ test }))
    //         .catch(error=> console.error(error.message));*/
    // }

    render() {
        console.log('Render Portfolio Page',this.props);
        let _this = this;
        function returnFullstory(){
            return { __html : _this.props.postFull.fullstory }
        }
        return(
            <div>
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