import React from 'react';

import Header from './Components/Header';
import Contact from './Components/Contact';


import config from './data/config';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            config: config,
            user: null
        }
    }

    login(user) {
        console.log("Login function RUNNED");
        this.setState({user: true}, ()=>this.props.history.push('/blog'));
    }

    logout() {
        this.setState({user: null},  ()=>this.props.history.push('/'));
    }


    render() {
        return(
            <div className="app">
                <h1>Last test web server</h1>
                <Header /> 
                <Contact config={this.state.config} />
            </div>
        )
    }
    
}

export default App;