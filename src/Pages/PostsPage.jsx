import React from 'react';
import {NavLink} from 'react-router-dom';

import types from '../data/types';
import about from '../data/about';

import PortfolioPage  from '../Components/PortfolioPage';
// import Blogpage  from '../Components/Blogpage';
import Error from './Error';

class PostsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: null,
            categorySlug: null,
            error: null,
            typeInfo: null,
            typeSlug: null,
            categoryInfo: null,
            currentComponent: null,
            postFull: null,
            pageComponents : {
                PortfolioPage: PortfolioPage,
                // BlogList: BlogList
            },
        }
    }

    generatePage(typesList, typeSlug, categorySlug, postFull) {
        try{
            let typeInfo = typesList.filter(type=> ( type.slug == typeSlug ) ? type :'')[0];
            if (typeof(typeInfo) == 'undefined' || typeof(this.state.pageComponents[typeInfo.fullComponent]) == 'undefined' ) {
                throw new Error('Page not found');
            }
            let pageInfo = typeInfo;
            if(typeof(categorySlug) != 'undefined') {
                let categoryInfo = typeInfo.categories.filter(category=> ( category.slug == categorySlug ) ? category :'')[0];
                if (typeof(categoryInfo) == 'undefined') {
                    throw new Error('Category not found');
                } else {
                    pageInfo = categoryInfo;
                }
            }
            if (typeof(postFull) == 'undefined') {
                throw new Error('Post not found');
            }
            
            let currentComponent = this.state.pageComponents[typeInfo.fullComponent];
            this.setState({
                postFull,
                typeInfo,
                pageInfo,
                typeSlug,
                categorySlug,
                currentComponent,
                page: this.props.match.params.page,
            });
        } catch(error) {
            console.log(error);
            let currentComponent = Error;
            this.setState({
                error,
                currentComponent
            });
        }
       
    }

    componentWillMount() {
        this.getDatasFromApi();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.page !== this.props.match.params.type) {
            this.getDatasFromApi();
        }
    }
    getDatasFromApi() {
        this.generatePage(types, this.props.match.params.type, this.props.match.params.category, about);
    }

    render(){
        let ComponentName = this.state.currentComponent;
        console.log('Render Portfolio Page',this.props);

        return (
            <div>
                {(this.state.typeInfo) ?
                    <div className="categories">
                        <NavLink exact to={`/${this.props.lang}/${this.state.typeSlug}`}>All</NavLink>
                        {this.state.typeInfo.categories.map(item => 
                            <NavLink key={item.id} to={`/${this.props.lang}/${this.state.typeSlug}/${item.slug}`} className={(this.state.categorySlug == item.slug) ? 'active' : ''} data-filter={item.slug}>{item.title}</NavLink>
                            )}
                    </div> 
                : ''}
                
                <ComponentName postFull={this.state.postFull} typeInfo={this.state.typeInfo} pageInfo={this.state.pageInfo} {...this.props}/>
            </div>
        )
    }
}

export default PostsPage;