import React from 'react';
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
            typeSlug: null,
            typeInfo: null,
            currentComponent: null,
            listComponents : {
                PortfolioList: PortfolioList,
                BlogList: BlogList
            },
        }
    }

    getTypeInfo(typesList, categorySlug) {
        console.log(categorySlug);
        let typeInfo = typesList.filter(type=> ( type.slug == categorySlug ) ? type :'')[0];
        //HERE GOES GETTING TYPEINFO FROM API AFTERWILLDO

        if (typeof(typeInfo) == 'undefined') {
            let currentComponent = Error;
            this.setState({
                currentComponent
            });
        } else {
            let currentComponent = this.state.listComponents[typeInfo.listComponent];
            this.setState({
                typeInfo,
                currentComponent
            });
        }
        return typeInfo;
    }

    componentWillMount() {
        // this.setState({
        //     page: this.props.match.params.page,
        //     categorySlug: this.props.match.params.category,
        // });
        // this.getTypeInfo(types, this.props.match.params.category);
        this.updateComponent();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.category !== this.props.match.params.category) {
            this.updateComponent();
        }
    }

    updateComponent() {
        this.setState({
            page: this.props.match.params.page,
            categorySlug: this.props.match.params.category,
        });
        this.getTypeInfo(types, this.props.match.params.category);
    }

    render(){
        let ComponentName = this.state.currentComponent;
        return <ComponentName typeInfo={this.state.typeInfo} {...this.props}/>
    }
}

export default PostsCategory;