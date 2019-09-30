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
            page: 1,
            category: props.match.params.category,
            error: false,
            categoryInfo: false,
            categoryList: false,
            currentComponent: Loading,
            postsList: [],
            loadMore: false,
            listComponents : {
                PortfolioList: PortfolioList,
                BlogList: BlogList
            },
        }
        this.categoryChange = this.categoryChange.bind(this);
    }

    loadMorePosts(){
        this.props.getPostList(this.props.config.lang,  this.state.category, this.state.page).then( response => {
            let pageListInfo = this.props.store.posts[this.state.category];
            let loadMore = false;
            let postsList = this.state.postsList.concat(pageListInfo.postslist);
            if(this.state.page < pageListInfo.totalpages){
                loadMore = true;
            }

            this.setState({
                pageListInfo,
                postsList,
                loadMore,
                page :this.state.page + 1
            });
        });
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
        this.props.getPostList(this.props.config.lang,  this.state.category, 1).then( response => {
            let pageListInfo = this.props.store.posts[this.state.category];
            let loadMore = false;
            let postsList = pageListInfo.postslist;
            if(1 < pageListInfo.totalpages){
                loadMore = true;
            }
            this.setState({
                pageListInfo,
                postsList,
                loadMore,
                page : 2
            });
        });
    }

    componentWillMount() {
        if(!this.state.categoryInfo) {
            this.getCategories();
        }

        if(this.state.postsList.length == 0) {
           this.getPostList();
        }
        window.scrollTo(0,0);
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
                {(this.state.postsList.length == 0) ?
                    <div className="blockTitle">
                        <h2>{this.props.languageData['There is no items here yet :(']}</h2>
                        <p>{this.props.languageData['Please come back later']}</p>
                    </div> : "" }

                {(this.state.loadMore) ?
                    <div onClick={()=> this.loadMorePosts()} className={"sitebutton"}>{this.props.languageData['Load More']}</div> : "" }
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
	getPostList: (lang, slug, page) => dispatch(getPostList(lang, slug, page)),
});

const PostsCategoryContainer = connect(mapStateToProps, mapDispatchToProps)(PostsCategory);

export default PostsCategoryContainer;