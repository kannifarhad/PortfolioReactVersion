import React from 'react';

import Home from './Pages/Home';
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
                <Home /> 
                <Contact config={this.state.config} />
            </div>
        )
    }
    
}

export default App;