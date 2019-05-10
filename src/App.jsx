import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Pages/Home';
import Contact from './Components/Contact';
import Error from './Pages/Error';

import config from './data/config';
import languageTexts from './data/language';
import menusList from './data/menu';
import about from './data/about';
import skills from './data/skills';
import portfolio from './data/portfolio';
import categoriesList from './data/categories';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            config: null,
            menusList: null,
            languageTexts: null,
            categoriesList: null,
            user: null
        }
        this.languageChange = this.languageChange.bind(this);
    }
    languageChange(lang){

    }
    login(user) {
        this.setState({user: true}, ()=>this.props.history.push('/blog'));
    }

    logout() {
        this.setState({user: null},  ()=>this.props.history.push('/'));
    }

    componentWillMount() {
        this.setState({
            config,
            menusList,
            languageTexts,
            categoriesList
        });
        /*axios.get('http://api.kanni.loc/main')
            .then(response => response.data())
            .then(test => this.setState({ test }))
            .catch(error=> console.error(error.message));*/
    }

    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" render={ props => <Home 
                                                                language={this.state.languageTexts}  
                                                                config={this.state.config} 
                                                                menu={this.state.menusList}
                                                                categories={this.state.categoriesList}
                                                                // onLangChange={this.languageChange(lang)}
                                                                {...props} /> } />
                    <Route component={Error} />
                </Switch>                   
                <Contact config={this.state.config} />
            </Router>
        )
    }
    
}

export default App;