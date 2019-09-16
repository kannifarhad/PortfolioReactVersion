import React from 'react';
import { connect } from 'react-redux';
import {getCategory, getCategoryList, getPost, getPostList} from '../Redux/actions';

import PortfolioList  from '../Components/PortfolioList';
import BlogList  from '../Components/BlogList';
import Error from './Error';
import PagesHeader from '../Components/PagesHeader';

class PostsCategory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: false,
            category: props.match.params.category,
            error: false,
            categoryInfo: false,
            categoryList: false,
            currentComponent: false,
            postsList: undefined,
            listComponents : {
                PortfolioList: PortfolioList,
                BlogList: BlogList
            },
        }
        this.categoryChange = this.categoryChange.bind(this);
    }

    categoryChange(slug){
        this.setState({
            category: slug
        });
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

    setCategoryList(categoryInfo){
        if(categoryInfo.children.length == 0){
            this.props.getCategory(this.props.config.lang , categoryInfo.parent).then( response => {
                this.setState({
                    categoryList: this.props.store.categories[categoryInfo.parent],
                    categoryInfo
				});
			});
        }else{
            this.setState({
                categoryList: categoryInfo,
                categoryInfo
            });
        }
    }

    componentWillMount() {
        if(!this.state.categoryInfo) {
			this.props.getCategory(this.props.config.lang , this.state.category).then( response => {
                this.setCategoryList(this.props.store.categories[this.state.category]);
			});
        }

        if(!this.state.postsList) {
            this.props.getPostList(this.props.config.lang,  this.state.category).then( response => {
                this.setState({
                    postsList: this.props.store.posts[this.state.category] 
                });
            });
        }

        this.setState({
            currentComponent: PortfolioList
        });

       // this.getTypeInfo(types, this.props.match.params.type, this.props.match.params.category);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.category != this.state.category || prevProps.config.lang != this.props.config.lang ) {
            this.props.getPostList(this.props.config.lang,  this.state.category).then( response => {
				this.setState({
					postsList: this.props.store.posts[this.state.category] 
				});
            });
            
            this.props.getCategory(this.props.config.lang , this.state.category).then( response => {
                this.setCategoryList(this.props.store.categories[this.state.category]);

			});
        }
    }

    render(){
        let ComponentName = this.state.currentComponent;
        return (
            <div>
                <PagesHeader categoryList={this.state.categoryList} category={this.state.category} categoryChange={this.categoryChange} />
                <ComponentName pageInfo={this.state.categoryInfo} postsList={this.state.postsList}/>
            </div>
        )
    }
}



const mapStateToProps = (store, ownProps) => {
    return {
		config : store.common.config,
        languageData: store.common.translations,
        posts : store.posts,
        categories: store.categories,
        store,
        ...ownProps
    }
};

const mapDispatchToProps = dispatch => ({
	getCategory: (lang, slug) => dispatch(getCategory(lang, slug)),
	getPost: (lang, slug) => dispatch(getPost(lang, slug)),
	getPostList: (lang, slug) => dispatch(getPostList(lang, slug)),
});

const PostsCategoryContainer = connect(mapStateToProps, mapDispatchToProps)(PostsCategory);

export default PostsCategoryContainer;