import React from 'react';
import ReactDOM from 'react-dom';

import types from '../data/types';

import Portfolio  from './Templates/Portfolio';
import Blog from './Templates/Blog';
import Error from './Error';


class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typeSlug: this.props.match.params.typeSlug,
            categorySlug: this.props.match.params.categorySlug,
            postSlug: this.props.match.params.postSlug,
            typeinfo: null,
            listComponents : {
                Portfolio: Portfolio,
                Blog: Blog
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
            let currentComponent = this.state.listComponents[typeinfo.fullComponent];
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

export default Posts;