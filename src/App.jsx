import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Pages/Home';
import Contact from './Components/Contact';
import InnerHeader from './Components/InnerHeader';
import PostsList from './Pages/PostsList';
import PostsPage from './Pages/PostsPage';
import Error from './Pages/Error';

import config from './data/config';
import languageTexts from './data/language';
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
            languageTexts: null,
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
            languageTexts,
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
        return(
            <Router>
                <Route path="/" render={ ( props ) => ( (props.location.pathname !== "/") && !(/\/([a-zA-Z]{2})([/]?)$/.test(props.location.pathname)) ?  
                            <InnerHeader 
                                language={this.state.languageTexts}  
                                config={this.state.config} 
                                menuData={this.state.menusList['inner-menu']}
                                categories={this.state.categoriesList}
                                lang={this.state.siteLang}
                                handleAppLangChange={this.handleLangChange} {...props} /> 
                                : "" )} />

                <Switch>
                    <Route exact path="/:lang?" 
                            render={ props => <Home 
                                                    language={this.state.languageTexts}  
                                                    config={this.state.config} 
                                                    menu={this.state.menusList}
                                                    categories={this.state.categoriesList}
                                                    lang={this.state.siteLang}
                                                    handleAppLangChange={this.handleLangChange}
                                                    {...props} /> } />

                    <Route path="/:lang?/post/:category?" 
                            render = {props => <PostsList 
                                                    language={this.state.languageTexts}  
                                                    config={this.state.config} 
                                                    menu={this.state.menusList}
                                                    categories={this.state.categoriesList}
                                                    lang={this.state.siteLang}
                                                    {...props} /> } />

                    <Route path="/:lang?/post/:category/:postslug" 
                            render = {props => <PostsPage 
                                                    language={this.state.languageTexts}  
                                                    config={this.state.config} 
                                                    menu={this.state.menusList}
                                                    categories={this.state.categoriesList}
                                                    lang={this.state.siteLang}
                                                    {...props} /> } />
                                                    
                    <Route component={Error} />
                </Switch>                   
                <Contact config={this.state.config} />
            </Router>
        )
    }
    
}

export default App;