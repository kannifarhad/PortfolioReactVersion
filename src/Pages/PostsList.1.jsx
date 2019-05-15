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
            typeInfo: null,
            categoryInfo: null,
            currentComponent: null,
            listComponents : {
                PortfolioList: PortfolioList,
                 BlogList: BlogList
            },
        }
    }

    getTypeInfo(typesList, typeSlug) {
        let typeInfo = typesList.filter(type=> ( type.slug == typeSlug ) ? type :'')[0];
        //HERE GOES GETTING TYPEINFO FROM API AFTERWILLDO
        console.log('Typeindo', typeInfo);
        if (typeof(typeInfo) == 'undefined' || typeof(this.state.listComponents[typeInfo.listComponent]) == 'undefined' ) {
            let currentComponent = Error;
            this.setState({
                currentComponent
            });
        } else {
            let currentComponent = this.state.listComponents[typeInfo.listComponent];
            this.setState({
                typeInfo,
                currentComponent,
                page: this.props.match.params.page,
                typeSlug: this.props.match.params.type,
                pageInfo:typeInfo
            },function() {
                if(this.props.match.params.category) {
                    this.getCategoryInfo();
                }
            });
        }
    }
    getCategoryInfo(){
        let categorySlug = this.props.match.params.category;
        let categoryInfo = this.state.typeInfo.categories.filter(category=> ( category.slug == categorySlug ) ? category :'')[0];
        console.log(categorySlug , categoryInfo);
         if (typeof(categoryInfo) == 'undefined') {
            let currentComponent = Error;
            this.setState({
                currentComponent
            });
        } else {
            this.setState({
                categorySlug,
                pageInfo:categoryInfo
            });
        }

    }
    componentWillMount() {
        this.updateComponent();
    }

    componentDidUpdate(prevProps) {
        console.log('componentDidUpdate');
        if(prevProps.match.params.type !== this.props.match.params.type || prevProps.match.params.category !== this.props.match.params.category) {
            this.updateComponent();
        }
    }

    updateComponent() {
        this.getTypeInfo(types, this.props.match.params.type);
    }

    render(){
        let ComponentName = this.state.currentComponent;
        console.log('Render pageInfo', this.state.pageInfo);
        return (
            <div>
                {(this.state.typeInfo) ?
                <div className="categories">
                <NavLink exact to={`/${this.props.lang}/${this.state.typeSlug}`}>All</NavLink>
                {this.state.typeInfo.categories.map(item => 
                    <NavLink key={item.id} to={`/${this.props.lang}/${this.state.typeSlug}/${item.slug}`} className={(this.state.categorySlug == item.slug) ? 'active' : ''} data-filter={item.slug}>{item.title}</NavLink>
                    )}
                </div>  : ''}
                <ComponentName pageInfo={this.state.pageInfo} {...this.props}/>
            </div>
        )
    }
}

export default PostsCategory;