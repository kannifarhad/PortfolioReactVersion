import React from 'react';
import {NavLink} from 'react-router-dom';

import PortfolioItemsList from './Elements/PortfolioItemsList';
import PortfolioHomeHead from './Elements/PortfolioHomeHead';

import portfolio from '../data/portfolio';



class PortfolioList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeSlug: this.props.match.params.type,
            categorySlug: this.props.match.params.category,
            postsList: null,
        }
    }

    componentWillMount() {
        //getting portfolio posts list
        this.setState({
            postsList : portfolio,
        });
        /*axios.get('http://api.kanni.loc/main')
            .then(response => response.data())
            .then(test => this.setState({ test }))
            .catch(error=> console.error(error.message));*/
    }

    render() {
        console.log('Render Portfolio List',this.props);
        return(
            <div>
                
                

                <div className="projectwrapper">
                    <div className="projectcircles"></div>
                    <div className="projecttitle"><h1>{this.props.pageInfo.title}</h1></div>
                    <div className="projectstory"><p>{this.props.pageInfo.description}</p></div>
                </div>

                <div className="projectslist">
                    <PortfolioItemsList languageData={this.props.languageData} items={this.state.postsList} lang={this.props.lang} categories={this.props.typeInfo.categories}/>
                </div>
            </div>
        )
    }
}

export default PortfolioList;