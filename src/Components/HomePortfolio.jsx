import React from 'react';
import PortfolioItemsList from './Elements/PortfolioItemsList';
import PortfolioHomeHead from './Elements/PortfolioHomeHead';
import {getCategory, getCategoryList, getPost, getPostList} from '../Redux/actions';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

class HomePortfolio extends React.Component{   
    constructor(props){
		super(props);
		this.state = {
			portfolioInfo : false,
            works: [],
            category: 'portfolio',
            categoryList: false,
            hasError:false
        }
        this.categoryChange = this.categoryChange.bind(this);
    }
    categoryChange(slug){
        this.setState({
            category: slug
        });
    }

    getCategories(){
        this.props.getCategory(this.props.config.lang , 'portfolio').then( response => {
            this.setState({
                portfolioInfo: this.props.store.categories['portfolio'] 
            });
        });
    }

    getPostList(){
        this.props.getPostList(this.props.config.lang,  this.state.category).then( response => {
            let postsList = this.props.store.posts[this.state.category]
            this.setState({
                works: postsList.postslist
            });
        });
    }

    componentWillMount(){
		if(!this.state.portfolioInfo) {
			this.getCategories();
		}

		if(this.state.works.length == 0) {
			this.getPostList();
		}
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.category != this.state.category || prevProps.config.lang != this.props.config.lang ) {
            this.getPostList();
            this.getCategories();
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
    
    render() {
        return (
            <React.Fragment>
                <div id="portfolio">
                    {(!this.state.hasError)?
                    <div className="portfoliocont">
                        <PortfolioHomeHead category={this.state.category} categoryChange={this.categoryChange} portfolioInfo={this.state.portfolioInfo} />
                        <PortfolioItemsList items={this.state.works} />
                    
                    </div>
                    : ""}
                </div>
                <div className="viewmorecontainer">
                    <NavLink to={`/${this.props.config.lang}/${this.state.category}`} className={"sitebutton"}>{this.props.languageData['View More']}</NavLink>
                </div>
             </React.Fragment>

        )
    }
    
}
const mapStateToProps = (store, ownprops) => {
    return {
        config: store.common.config,
		languageData: store.common.translations,
        posts : store.posts,
        categories: store.categories,
        store,
        ...ownprops, 
    }
};
const mapDispatchToProps = dispatch => ({
	getCategory: (lang, slug) => dispatch(getCategory(lang, slug)),
	getPost: (lang, slug) => dispatch(getPost(lang, slug)),
	getPostList: (lang, slug) => dispatch(getPostList(lang, slug)),
	getCategoryList: (lang) => dispatch(getCategoryList(lang))
});
const ContainerHomePortfolio = connect(mapStateToProps, mapDispatchToProps)(HomePortfolio);

export default ContainerHomePortfolio;