import React from 'react';
import {NavLink} from 'react-router-dom';

import types from '../data/types';

import PortfolioList  from '../Components/PortfolioList';
import BlogList  from '../Components/BlogList';
import Error from './Error';

class PostsCategory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: null,
            categorySlug: null,
            error: null,
            typeInfo: null,
            categoryInfo: null,
            currentComponent: null,
            listComponents : {
                PortfolioList: PortfolioList,
                BlogList: BlogList
            },
        }
    }

    getTypeInfo(typesList, typeSlug, categorySlug) {
        try{
            let typeInfo = typesList.filter(type=> ( type.slug == typeSlug ) ? type :'')[0];
            if (typeof(typeInfo) == 'undefined' || typeof(this.state.listComponents[typeInfo.listComponent]) == 'undefined' ) {
                throw new Error('Page not found');
            } else {
                let pageInfo = typeInfo;
                if(typeof(categorySlug) != 'undefined') {
                    let categoryInfo = typeInfo.categories.filter(category=> ( category.slug == categorySlug ) ? category :'')[0];
                    if (typeof(categoryInfo) == 'undefined') {
                        throw new Error('Category not found');
                   } else {
                       pageInfo = categoryInfo;
                   }
                }
                let currentComponent = this.state.listComponents[typeInfo.listComponent];
                this.setState({
                    typeInfo,
                    pageInfo,
                    typeSlug,
                    categorySlug,
                    currentComponent,
                    page: this.props.match.params.page,
                });
            }
        } catch(error) {
            let currentComponent = Error;
            this.setState({
                error,
                currentComponent
            });
        }
       
    }

    componentWillMount() {
        this.getTypeInfo(types, this.props.match.params.type, this.props.match.params.category);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.type !== this.props.match.params.type || prevProps.match.params.category !== this.props.match.params.category) {
            this.getTypeInfo(types, this.props.match.params.type, this.props.match.params.category);
        }
    }

    render(){
        let ComponentName = this.state.currentComponent;
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
                
                <ComponentName typeInfo={this.state.typeInfo} pageInfo={this.state.pageInfo} {...this.props}/>
            </div>
        )
    }
}

export default PostsCategory;