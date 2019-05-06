import React from 'react';
import ReactDOM from 'react-dom';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        //console.log(props);
    }
    componentWillMount() {
            /*axios.get('http://api.kanni.loc/main')
                .then(response => response.data())
                .then(test => this.setState({ test }))
                .catch(error=> console.error(error.message));*/
        
    }
    render(){
        return(

            <div className="projectwrapper" styles={{padding:"0px"}}>
                <div className="projectcircles"></div>


                    <div className="projecttitle">
                        <h1>Title of Post</h1>
                        <div><h6>87878</h6><span>18 MAY 2018</span></div>
                    </div>


                    <div className="projectfull">
                        <div className="articlecontent">
                                   Fullstory asas
                        </div>
                    </div>
            </div>
        )
    }
}

export default Portfolio;