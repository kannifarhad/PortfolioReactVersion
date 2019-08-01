import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Contact from './Components/Contact';
import InnerHeader from './Components/InnerHeader';
import Subscribe from './Components/Subscribe';

import Home from './Pages/Home';
import PostsList from './Pages/PostsList';
import PostsPage from './Pages/PostsPage';
import Error from './Pages/Error';




class App extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.store = this.props.store;
        this.state = this.store.getState();

        // this.state = {
        //     siteLang : null,
        //     config: null,
        //     menusList: null,
        //     languageData: null,
        //     categoriesList: null,
        //     user: null,
        //     URI: null
        // }
        this.handleLangChange = this.handleLangChange.bind(this);
    }

    handleLangChange(lang){
        this.store.dispatch(langChange(lang));
    }

    componentWillMount() {
        //let getLang = config.langlist.filter(langs=> ( langs.default == 1 ) ? langs :'')[0];

        // this.setState({
        //     config,
        //     menusList,
        //     languageData,
        //     categoriesList,
        //     siteLang: getLang,
        //     URI: config.URL + getLang.slug
        // });
        /*axios.get('http://api.kanni.loc/main')
            .then(response => response.data())
            .then(test => this.setState({ test }))
            .catch(error=> console.error(error.message));*/
    }

    render() {
        console.log(this.state);
        return(
            <Router>
                <Route path="/" render={ ( props ) => ( (props.location.pathname !== "/") && !(/\/([a-zA-Z]{2})([/]?)$/.test(props.location.pathname)) ?  
                            <InnerHeader 
                                languageData={this.state.languageData}  
                                config={this.state.config} 
                                menuData={this.state.menusList['inner-menu']}
                                categories={this.state.categoriesList}
                                lang={this.state.siteLang}
                                store = {this.store}
                                 {...props} /> 
                                : "" )} />

                <Switch>
                    <Route exact path="/:lang?" 
                            render={ props => <Home 
                                                    languageData={this.state.languageData}  
                                                    config={this.state.config} 
                                                    menu={this.state.menusList}
                                                    categories={this.state.categoriesList}
                                                    lang={this.state.siteLang}
                                                    store = {this.store}

                                                    {...props} /> } />
                <Route path="/:lang?/:type/:category?/view/:post" 
                            render = {props => <PostsPage 
                                                    languageData={this.state.languageData}  
                                                    config={this.state.config} 
                                                    menu={this.state.menusList}
                                                    categories={this.state.categoriesList}
                                                    lang={this.state.siteLang}
                                                    store = {this.store}

                                                    {...props} /> } />
                    <Route path="/:lang?/:type/:category?" 
                            render = {props => <PostsList 
                                                    languageData={this.state.languageData}  
                                                    config={this.state.config} 
                                                    menu={this.state.menusList}
                                                    lang={this.state.siteLang}
                                                    store = {this.store}

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