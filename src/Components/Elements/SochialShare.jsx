import React from 'react';
import { connect } from 'react-redux';

class SochialShare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shareLink: null,
        }
    }

    componentWillMount() {
        this.setState({
            shareLink: window.location.href
        })
    }
    sochialShare(link, event){
        event.preventDefault();
        window.open(`${link}'${this.state.shareLink}'` , 'newWin','width=600,height=600');
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.shareLink !== window.location.href) {
            this.setState({
                shareLink: window.location.href
            })
        }
    }

    render(){
        return(
            <div className="sochialshare">        
                <div className="sochialleft"><h2>{this.props.languageData['Share in Social Networks']}</h2></div>
                <div className="sochialright">
                    <ul className="sochiallinks">
                        <li><a className="facebook" onClick={(e) => this.sochialShare('https://www.facebook.com/sharer/sharer.php?u=', e)} alt="Share On Facebook" ><span className="icons icon-facebook"></span> </a></li>
                        <li><a className="twitter" onClick={(e) => this.sochialShare('https://twitter.com/home?status=', e)} alt="Share On Twitter" ><span className="icons icon-twitter"></span></a></li>
                        <li><a className="google" onClick={(e) => this.sochialShare('https://plus.google.com/share?url=', e)}  alt="Share On Google+"><span className="icons icon-google"></span></a></li>
                        <li><a className="vkontakte"  onClick={(e) => this.sochialShare('http://vkontakte.ru/share.php?url=', e)} alt="Share On VKontakte"><span className="icons icon-vkontakte"></span></a></li>
                        <li><a className="linkedin"  onClick={(e) => this.sochialShare('https://www.linkedin.com/shareArticle?mini=true&url=', e)} alt="Share On Linkedin" ><span className="icons icon-linkedin"></span></a></li>
                    </ul>
                </div>
                <div className="clear"></div>
          </div>
        )
    }
   
}

const mapStateToProps = (store) => {
    return {
		config : store.common.config,
        languageData: store.common.translations,
        store
    }
};


export default connect(mapStateToProps, null)(SochialShare);
