import React from 'react';
import {getCategory, getCategoryList, getPost, getPostList} from '../Redux/actions';
import { connect } from 'react-redux';
import OwlCarousel from 'react-owl-carousel';

class WorkedWith extends React.Component {
    constructor(props){
		super(props);
		this.state = {
			workedWithInfo : false,
            partners: [],
            category: 'i-work-with',
            hasError:false
        }
    }

    componentWillMount(){
		if(!this.state.workedWithInfo) {
			this.props.getCategory(this.props.config.lang , this.state.category).then( response => {
				this.setState({
					workedWithInfo: this.props.store.categories[this.state.category] 
				});
			});
		}

		if(this.state.partners.length == 0) {
			this.props.getPostList(this.props.config.lang,  this.state.category).then( response => {
				this.setState({
					partners: this.props.store.posts[this.state.category] 
				});
			});
        }
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.category != this.state.category || prevProps.config.lang != this.props.config.lang ) {
            this.props.getCategory(this.props.config.lang , this.state.category).then( response => {
				this.setState({
					workedWithInfo: this.props.store.categories[this.state.category] 
				});
			});
            this.props.getPostList(this.props.config.lang,  this.state.category).then( response => {
				this.setState({
					partners: this.props.store.posts[this.state.category] 
				});
			});
        }
        

    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
    render() {
        return(
            <div id="workedwith">
                <div className="workedhead">
                    <div>
                    <h1>{this.state.workedWithInfo.title}</h1>
                    <p>{this.state.workedWithInfo.description}</p>
                    </div>
                </div>
    
                <div className="workwith">
                    <div className="logos">
                    {(typeof(this.state.partners.postslist) != 'undefined')?
                        <OwlCarousel className="owl-theme" loop margin={0}>
                            {this.state.partners.postslist.map(partner => 
                            <a className={"item"} key={partner.id} href={partner.shortstory} target="_blank" alt={partner.title}><img className="svg" src={partner.thumb_image} /></a>
                            )}
                        </OwlCarousel>
                         : ""}
                    </div>
                    
                </div><div className="clear"></div>
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

const WorkedWithContainer = connect(mapStateToProps, mapDispatchToProps)(WorkedWith);

export default WorkedWithContainer;