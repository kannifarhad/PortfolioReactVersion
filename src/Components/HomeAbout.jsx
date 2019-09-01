import React from 'react';
import Skills from './Elements/HomeSkills';
import {connect} from 'react-redux';
import {getCategory, getPost, getPostList} from '../Redux/actions';

class HomeAbout extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			aboutMe : false,
			designerSkills: false,
			programmerSkills: false,
		}
		
	}
	returnFullstory(){
		return { __html : this.state.aboutMe.fullstory}
	}
	componentWillMount(){
		if(!this.state.aboutMe) {
			this.props.getPost(this.props.config.lang , 'farhad-aliyev_53').then( response => {
				this.setState({
					aboutMe: this.props.store.posts['farhad-aliyev_53'] 
				});
			});
		}
		
		if(!this.state.designerSkills) {
			this.props.getPostList(this.props.config.lang, 'designer-skills').then( response => {
				this.setState({
					designerSkills: this.props.store.posts['designer-skills'] 
				});
			});
		}
		if(!this.state.programmerSkills) {
			this.props.getPostList(this.props.config.lang, 'programming-skills').then( response => {
				this.setState({
					programmerSkills: this.props.store.posts['programming-skills'] 
				});
			});
		}
	}
	render() {
		return(
			<div id="aboutme">
				 <div className="aboutmecircles"><div className="photo"></div></div>
				 {(typeof this.state.aboutMe != false) ? 
					<div className="name">
						<span>{this.state.aboutMe.title}</span>
						<p className="profession">{this.state.aboutMe.shortstory}</p>
						<div className="aboutext"  dangerouslySetInnerHTML={this.returnFullstory()}></div>
						<div className="clear"></div> 
					</div>
					: ''}
				
				<Skills /> 
			</div>
			)
	}
    
}



const mapStateToProps = (store, ownProps) => {
    return {
		config : store.common.config,
        store,
        ...ownProps
    }
};

const mapDispatchToProps = dispatch => ({
	getCategory: (lang, slug) => dispatch(getCategory(lang, slug)),
	getPost: (lang, slug) => dispatch(getPost(lang, slug)),
	getPostList: (lang, slug) => dispatch(getPostList(lang, slug)),
	
});

const HomeAboutContainer = connect(mapStateToProps, mapDispatchToProps)(HomeAbout);

export default HomeAboutContainer;