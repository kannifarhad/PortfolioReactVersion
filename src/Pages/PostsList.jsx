import React from 'react';
import { connect } from 'react-redux';
import {getCategory, getCategoryList, getPost, getPostList} from '../Redux/actions';

import PortfolioList  from '../Components/PortfolioList';
import BlogList  from '../Components/BlogList';
import Error from './Error';
import PagesHeader from '../Components/PagesHeader';
import Loading from './Loading';


class PostsCategory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: false,
            category: props.match.params.category,
            error: false,
            categoryInfo: false,
            categoryList: false,
            currentComponent: Loading,
            postsList: undefined,
            loadTrue: true,
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

    setComponentInfo() {
        try{
            if (typeof(this.state.categoryInfo.list_template) == 'undefined' || typeof(this.state.listComponents[this.state.categoryInfo.list_template]) == 'undefined' ) {
                throw new Error('Page design not found');
            } else {
                let currentComponent = this.state.listComponents[this.state.categoryInfo.list_template];
                this.setState({
                    currentComponent
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

    getCategories(){
        this.props.getCategory(this.props.config.lang , this.state.category).then( response => {
            let categoryInfo = this.props.store.categories[this.state.category];

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
        });
    }

    getPostList(){
        this.props.getPostList(this.props.config.lang,  this.state.category).then( response => {
            this.setState({
                postsList: this.props.store.posts[this.state.category] 
            });
        });
    }

    componentWillMount() {
        if(!this.state.categoryInfo) {
            this.getCategories();
        }

        if(!this.state.postsList) {
           this.getPostList();
        }

    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.category != this.props.match.params.category) {
            this.categoryChange(this.props.match.params.category);
        }

        if(prevState.category != this.state.category || prevProps.config.lang != this.props.config.lang ) {
            this.getPostList();
            this.getCategories();
        }

        if(typeof(this.state.listComponents[this.state.categoryInfo.list_template]) != 'undefined'){
            if(prevState.currentComponent != this.state.listComponents[this.state.categoryInfo.list_template]){
                this.setComponentInfo();
            }
        } else {
            if(prevState.currentComponent != Error){
                this.setComponentInfo();
            }
        }
    }

    render(){
        let ComponentName = this.state.currentComponent;
        return (
            <div className={"projectwrapper"}>
                <PagesHeader categoryList={this.state.categoryList} category={this.state.category} categoryChange={this.categoryChange} />
                <ComponentName pageInfo={this.state.categoryInfo} postsList={this.state.postsList}/>
                {(this.state.loadTrue) ?
                <div className={"sitebutton"}>{this.props.languageData['Load More']}</div>
                :""}
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