import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Contact from './Components/Contact';
import InnerHeader from './Components/InnerHeader';
import Subscribe from './Components/Subscribe';

import Home from './Pages/Home';
import PostsList from './Pages/PostsList';
import PostsPage from './Pages/PostsPage';
import Error from './Pages/Error';

import config from './data/config';
import languageData from './data/language';
import menusList from './data/menu';
import categoriesList from './data/categories';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            siteLang : null,
            config: null,
            menusList: null,
            languageData: null,
            categoriesList: null,
            user: null,
            URI: null
        }
        this.handleLangChange = this.handleLangChange.bind(this);
    }

    handleLangChange(lang){
        console.log('App langchangeCalled: ' + lang);
        this.setState({
            siteLang: lang,
            URI: config.URL + lang
        });
    }

    componentWillMount() {
        this.setState({
            config,
            menusList,
            languageData,
            categoriesList,
            siteLang: config.defaultLang,
            URI: config.URL + config.defaultLang
        });
        /*axios.get('http://api.kanni.loc/main')
            .then(response => response.data())
            .then(test => this.setState({ test }))
            .catch(error=> console.error(error.message));*/
    }

    render() {
        console.log('App Render');
        return(
            <Router>
                <Route path="/" render={ ( props ) => ( (props.location.pathname !== "/") && !(/\/([a-zA-Z]{2})([/]?)$/.test(props.location.pathname)) ?  
                            <InnerHeader 
                                languageData={this.state.languageData}  
                                config={this.state.config} 
                                menuData={this.state.menusList['inner-menu']}
                                categories={this.state.categoriesList}
                                lang={this.state.siteLang}
                                handleAppLangChange={this.handleLangChange} {...props} /> 
                                : "" )} />

                <Switch>
                    <Route exact path="/:lang?" 
                            render={ props => <Home 
                                                    languageData={this.state.languageData}  
                                                    config={this.state.config} 
                                                    menu={this.state.menusList}
                                                    categories={this.state.categoriesList}
                                                    lang={this.state.siteLang}
                                                    handleAppLangChange={this.handleLangChange}
                                                    {...props} /> } />

                    <Route path="/:lang?/:type/:category?" 
                            render = {props => <PostsList 
                                                    languageData={this.state.languageData}  
                                                    config={this.state.config} 
                                                    menu={this.state.menusList}
                                                    lang={this.state.siteLang}
                                                    {...props} /> } />

                    <Route path="/:lang?/:type/:category/:postslug" 
                            render = {props => <PostsPage 
                                                    languageData={this.state.languageData}  
                                                    config={this.state.config} 
                                                    menu={this.state.menusList}
                                                    categories={this.state.categoriesList}
                                                    lang={this.state.siteLang}
                                                    {...props} /> } />
                                                    
                    <Route component={Error} />
                </Switch>       
                <Subscribe languageData={this.state.languageData} />            
                <Contact config={this.state.config} />
            </Router>
        )
    }
    
}

export default App;