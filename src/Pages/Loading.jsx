import React from 'react';

class Loading extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="projectwrapper">
                <div className="projectcircles"></div>
                <div className="projecttitle"> <h1>Loading!</h1></div>
                <div className="projectstory"> <p>Please wait till content loads</p> </div>
                <div className="projectfull"></div>
            </div>
        )
    }
}

export default Loading;