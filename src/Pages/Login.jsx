import React from 'react';

class Login extends React.Component {

    componentWillMount() {
        this.props.onLogin();
        console.log('Login COmponent on Mount');
    }
    onSubmit(event) {
        event.preventDeafult();
        this.props.onLogin();
    }
    render() {
        return (<div>LOGIN PAGE</div>);
    }
}

export default Login;