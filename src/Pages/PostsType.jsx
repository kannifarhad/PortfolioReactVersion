import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import types from '../data/types';

import PortfolioList  from './Templates/PortfolioList';
import BlogList  from './Templates/BlogList';
import Error from './Error';

class PostsType extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: this.props.match.params.page,
            typeSlug: this.props.match.params.typeSlug,
            categorySlug: this.props.match.params.categorySlug,
            typeinfo: null,
            listComponents : {
                PortfolioList: PortfolioList,
                BlogList: BlogList
            },
            currentComponent: null
        }

    }

    getTypeInfo(typesList, typeSlug) {
        let typeinfo = typesList.filter(type=> ( type.slug == typeSlug ) ? type :'')[0];
        if (typeof(typeinfo) == 'undefined') {
            let currentComponent = Error;
            this.setState({
                typeinfo,
                currentComponent
            });
        } else  {
            let currentComponent = this.state.listComponents[typeinfo.listComponent];
            this.setState({
                typeinfo,
                currentComponent
            });
        }
        return typeinfo;
    }

    componentWillMount() {
        let typeInfo = this.getTypeInfo(types, this.state.typeSlug);
    }

    render(){
        let Component = this.state.currentComponent;
        return <Component />
                
    }
}

export default PostsType;