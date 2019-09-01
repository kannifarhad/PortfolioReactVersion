import React from 'react';
import { connect } from 'react-redux';
import {getCategory, getPost, getPostList} from '../Redux/actions';

class HomeMyServices extends React.Component {
    constructor(props){
		super(props);
		this.state = {
			aboutServices : false,
			services: false
        }
        this.lampOver = this.lampOver.bind(this);
        this.lampOut = this.lampOut.bind(this);
    }
    lampOver(e){
        let elem = e.target;
        elem.classList.remove('fadeOut');
        elem.classList.add('fadeIn');
    }
    lampOut(e){
        let elem = e.target;
        elem.classList.add('fadeOut');
        elem.classList.remove('fadeIn');
    }
    sitatOver(){
        [...document.querySelectorAll('.lamp')].forEach(function(lamp) {
            lamp.getElementsByTagName('img')[0].classList.remove('fadeOut');
            lamp.getElementsByTagName('img')[0].classList.add('fadeIn');
        });
    }
    sitatOut(){
        [...document.querySelectorAll('.lamp')].forEach(function(lamp) {
            lamp.getElementsByTagName('img')[0].classList.remove('fadeIn');
            lamp.getElementsByTagName('img')[0].classList.add('fadeOut');
        });
    }
	componentWillMount(){
		if(!this.state.aboutServices) {
			this.props.getCategory(this.props.config.lang , 'services').then( response => {
				this.setState({
					aboutServices: this.props.store.categories['services'] 
				});
			});
		}

		if(!this.state.services) {
			this.props.getPostList(this.props.config.lang, 'services').then( response => {
				this.setState({
					services: this.props.store.posts['services'] 
				});
			});
		}
	}
    render() {
        return(
            <div>
                <div id="myabilities">
                    <div className="abiliteshead">
                        <div>
                            <h1>{this.state.aboutServices.title}</h1>
                            <p>{this.state.aboutServices.description}</p>
                        </div>
                    </div>
    
                    <div className="abilitiescont">
                        {(this.state.services) ?
                         this.state.services.postslist.map(service => 
                            <div key={service.id} className="ability">
                                <div className="abilityicon"><img src={service.thumb_image} /> </div>
                                <h1>{service.title}</h1>
                                <p>{service.shortstory}</p>
                            </div>
                        ) : ''}
                    </div>
                    <div className="clear"></div>
                </div>
    
                <div id="lamps">
                    <div className="lampscont">
                        <div className="lamp lamp4" onMouseEnter={this.lampOver} onMouseLeave={this.lampOut} style={{left:"30px",top:"-90px"}}><img src="/assets/img/lamp/4on.png" /> </div>
                        <div className="lamp lamp5" onMouseEnter={this.lampOver} onMouseLeave={this.lampOut} style={{left:"130px",top:"-290px"}}><img src="/assets/img/lamp/5on.png"/> </div>
                        <div className="lamp lamp1" onMouseEnter={this.lampOver} onMouseLeave={this.lampOut} style={{left:"200px",top:"-50px"}}><img src="/assets/img/lamp/1on.png"/> </div>
                        <div className="lamp lamp3" onMouseEnter={this.lampOver} onMouseLeave={this.lampOut} style={{top:"-180px",left:"433px"}}><img src="/assets/img/lamp/3on.png"/> </div>
                        <div className="lamp lamp5" onMouseEnter={this.lampOver} onMouseLeave={this.lampOut} style={{left:"585px",top:"-100px"}}><img src="/assets/img/lamp/5on.png"/> </div>
                        <div className="lamp lamp4" onMouseEnter={this.lampOver} onMouseLeave={this.lampOut} style={{left:"710px",top:"-245px"}}><img src="/assets/img/lamp/4on.png"/> </div>
                        <div className="lamp lamp2" onMouseEnter={this.lampOver} onMouseLeave={this.lampOut} style={{left:"843px",top: "-173px"}}><img src="/assets/img/lamp/2on.png"/> </div>
                        <div className="lamp lamp5" onMouseEnter={this.lampOver} onMouseLeave={this.lampOut} style={{left:"1025px",top:"-230px"}}><img src="/assets/img/lamp/5on.png"/> </div>
                        <div className="lamp lamp4" onMouseEnter={this.lampOver} onMouseLeave={this.lampOut} style={{left:"1110px",top:"-10px"}}><img src="/assets/img/lamp/4on.png"/> </div>
                        <div className="lamp lamp3" onMouseEnter={this.lampOver} onMouseLeave={this.lampOut} style={{left:"1200px",top:"-240px"}}><img src="/assets/img/lamp/3on.png"/> </div>
    
                        <div className="sitat" onMouseEnter={this.sitatOver} onMouseLeave={this.sitatOut}>
                            <p>{this.props.languageData['There are painters who transform the sun to a yellow spot, but there are others who with the help of their art and their intelligence, transform a yellow spot into sun']}</p>
                            <span>{this.props.languageData['Pablo Picasso']}</span>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
    
}
const mapStateToProps = (store, ownProps) => {
    return {
		config: store.common.config,
		languageData: store.common.translations,
        posts : store.posts,
        categories: store.categories,
        store,
        ...ownProps
    }
};

const mapDispatchToProps = dispatch => ({
	getCategory: (lang, slug) => dispatch(getCategory(lang, slug)),
	getPostList: (lang, slug) => dispatch(getPostList(lang, slug)),
});

const HomeMyServicesContainer = connect(mapStateToProps, mapDispatchToProps)(HomeMyServices);

export default HomeMyServicesContainer;