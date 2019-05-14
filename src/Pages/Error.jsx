import React from 'react';
import ReactDOM from 'react-dom';

class Error extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="projectwrapper">
                <div className="projectcircles"></div>
                <div className="projecttitle"> <h1>Error!</h1></div>
                <div className="projectstory"> <p>This page doesn`t exists</p> </div>
                <div className="projectfull"></div>
            </div>
        )
    }
}

export default Error;