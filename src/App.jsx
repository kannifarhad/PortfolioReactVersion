import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { getMenus, getTranslations} from './Redux/actions';

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
        return (
            <Router>
                <Route path="/" render={ ( props ) => ( (props.location.pathname !== "/") && !(/\/([a-zA-Z]{2})([/]?)$/.test(props.location.pathname)) ?  
                            <InnerHeader {...props} /> 
                                : "" )} />
                <Switch>
                    <Route exact path="/:lang?" render={ props => <Home {...props} /> } />
                    <Route path="/:lang?/:type/:category?/view/:post" render = {props => <PostsPage  {...props} /> } />
                    <Route path="/:lang?/:type/:category?"  render = {props => <PostsList  {...props} /> } />
                    <Route component={Error} />
                </Switch>    
                    <Subscribe />   
                    <Contact/>
            </Router>
        );
    }

}

const mapStateToProps = store => {
    return {
        config: store.common.config,
		languageData: store.common.translations,
    }
};

const mapDispatchToProps = dispatch => ({
	getTranslations: (lang) => dispatch(getTranslations(lang)),
	getMenus: (lang) => dispatch(getMenus(lang))
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;