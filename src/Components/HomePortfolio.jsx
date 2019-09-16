import React from 'react';
import PortfolioItemsList from './Elements/PortfolioItemsList';
import PortfolioHomeHead from './Elements/PortfolioHomeHead';
import {getCategory, getCategoryList, getPost, getPostList} from '../Redux/actions';
import { connect } from 'react-redux';

class HomePortfolio extends React.Component{   
    constructor(props){
		super(props);
		this.state = {
			portfolioInfo : false,
            works: undefined,
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
    componentWillMount(){
		if(!this.state.portfolioInfo) {
			this.props.getCategory(this.props.config.lang , 'portfolio').then( response => {
				this.setState({
					portfolioInfo: this.props.store.categories['portfolio'] 
				});
			});
		}

		if(!this.state.works) {
			this.props.getPostList(this.props.config.lang,  this.state.category).then( response => {
				this.setState({
					works: this.props.store.posts[this.state.category] 
				});
			});
		}
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.category != this.state.category || prevProps.config.lang != this.props.config.lang ) {
            this.props.getPostList(this.props.config.lang,  this.state.category).then( response => {
				this.setState({
					works: this.props.store.posts[this.state.category] 
				});
            });
            
            this.props.getCategory(this.props.config.lang , 'portfolio').then( response => {
				this.setState({
					portfolioInfo: this.props.store.categories['portfolio'] 
				});
			});
        }
    }
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
    render() {
        return (
            <div id="portfolio">
                {(!this.state.hasError)?
                <div className="portfoliocont">
                    <PortfolioHomeHead category={this.state.category} categoryChange={this.categoryChange} portfolioInfo={this.state.portfolioInfo} />
                    <PortfolioItemsList items={this.state.works} />
                </div>
                : ""}
            </div>
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