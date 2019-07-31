import React from 'react';
import {NavLink} from 'react-router-dom';
import {Helmet} from "react-helmet";

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
        this.getPostsList();
    }
    componentDidUpdate(prevProps) {
        if(prevProps.pageInfo.slug !== this.props.pageInfo.slug) {
            this.getPostsList();
        }
    }
    getPostsList() {
        let postsList = (this.props.pageInfo.slug != 'portfolio') ? portfolio.filter(post=> ( post.categories.includes(this.props.pageInfo.slug)) ? post :'') : portfolio;
        this.setState({
            postsList,
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
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.props.pageInfo.title} | {this.props.lang.sitetitle}</title>
                    <meta name="description" content={this.props.pageInfo.description} />
                </Helmet>
                <div className="projectwrapper">
                    <div className="projectcircles"></div>
                    <div className="projecttitle"><h1>{this.props.pageInfo.title}</h1></div>
                    <div className="projectstory"><p>{this.props.pageInfo.description}</p></div>
                </div>

                <div className="projectslist">
                    <PortfolioItemsList categorySlug={this.props.match.params.category} typeSlug={this.props.match.params.type} languageData={this.props.languageData} items={this.state.postsList} lang={this.props.lang} categories={this.props.typeInfo.categories}/>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
}

export default PortfolioList;