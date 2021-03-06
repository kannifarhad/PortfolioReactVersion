import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { getMenus, getTranslations} from './Redux/actions';
import {Helmet} from "react-helmet";

import Contact from './Components/Contact';
import InnerHeader from './Components/InnerHeader';
import Subscribe from './Components/Subscribe';
import Home from './Pages/Home';
import PostsList from './Pages/PostsList';
import PostsPage from './Pages/PostsPage';
import Error from './Pages/Error';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevProps.config.lang != this.props.config.lang) {
            this.props.getTranslations(this.props.config.lang);
            this.props.getMenus(this.props.config.lang);
        }
    }

    render(){
        let currentLang = this.props.langList.filter(lang => { return lang.slug == this.props.config.lang})[0];
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{currentLang.sitetitle}</title>
                    <meta name="description" content={currentLang.description} />
                </Helmet>
                <Router>
                    <Route path="/" render={ ( props ) => ( (props.location.pathname !== "/") && !(/\/([a-zA-Z]{2})([/]?)$/.test(props.location.pathname)) ?  
                            <InnerHeader {...props} />  
                                    : "" )} />
                    <Switch>
                        <Route exact path="/:lang?" render={ props => <Home {...props} /> } />
                        <Route path="/:lang?/:category?/view/:post" render = {props => <PostsPage  {...props} /> } />
                        <Route path="/:lang?/:category/page/:page" render = {props => <PostsList  {...props} /> } />
                        <Route path="/:lang?/:category?" render = {props => <PostsList  {...props} /> } />
                        <Route component={Error} />
                    </Switch>    
                        <Subscribe />   
                        <Contact/>
                </Router>
            </React.Fragment>
        );
    }

}

const mapStateToProps = store => {
    return {
        config: store.common.config,
        langList: store.common.langList,
		languageData: store.common.translations,
    }
};

const mapDispatchToProps = dispatch => ({
	getTranslations: (lang) => dispatch(getTranslations(lang)),
	getMenus: (lang) => dispatch(getMenus(lang))
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;