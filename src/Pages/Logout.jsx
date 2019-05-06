import React, {Component} from 'react';


class Logout extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.onLogout();
    }
    render(){
        return null;
    }
}

export default Logout;