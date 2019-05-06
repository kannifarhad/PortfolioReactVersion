import React from 'react';
import ReactDOM from 'react-dom';

class Error extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
                <div>
                    <p>ERROR PAGE NOT FOUND!</p>
                </div>
        )
    }
}

export default Error;