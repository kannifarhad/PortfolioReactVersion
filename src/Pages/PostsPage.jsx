import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {getCategory, getCategoryList, getPost, getPostList} from '../Redux/actions';

import PortfolioPage  from '../Components/PortfolioPage';
// import Blogpage  from '../Components/Blogpage';
import Error from './Error';
import Loading from './Loading';
import PagesHeader from '../Components/PagesHeader';

class PostsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: props.match.params.category,
            error: false,
            categoryInfo: false,
            categoryList: false,
            currentComponent: Loading,
            postsList: undefined,
            postFull: null,
            pageComponents : {
                PortfolioPage: PortfolioPage,
                // BlogList: BlogList
            }
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
            if (typeof(this.state.categoryInfo.full_template) == 'undefined' || typeof(this.state.listComponents[this.state.categoryInfo.full_template]) == 'undefined' ) {
                throw new Error('Page design not found');
            } else {
                let currentComponent = this.state.listComponents[this.state.categoryInfo.full_template];
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
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.category != this.props.match.params.category) {
            this.setState({
                category:  this.props.match.params.category
            });
        }

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

    getDatasFromApi() {
        this.generatePage(types, this.props.match.params.type, this.props.match.params.category, about);
    }

    render(){
        let ComponentName = this.state.currentComponent;
        return (
            <div>
                <PagesHeader categoryList={this.state.categoryList} category={this.state.category} categoryChange={this.categoryChange} />
                {/* <ComponentName postFull={this.state.postFull} pageInfo={this.state.categoryInfo} /> */}
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

const PostsPageContainer = connect(mapStateToProps, mapDispatchToProps)(PostsPage);
export default PostsPageContainer;
