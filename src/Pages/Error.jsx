import React from 'react';
import ReactDOM from 'react-dom';

class Error extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <h2>ERROR PAGE NOT FOUND!</h2>
            </div>
        )
    }
}

export default Error;