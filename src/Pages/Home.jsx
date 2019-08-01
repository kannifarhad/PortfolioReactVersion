import React from 'react';

import HomeHeader from '../Components/HomeHeader';
import HomeAbout from '../Components/HomeAbout';
import HomeMyServices from '../Components/HomeMyServices';
import HomePortfolio from '../Components/HomePortfolio';
import WorkedWith from '../Components/WorkedWith';


import about from '../data/about';
import skills from '../data/skills';
import portfolio from '../data/portfolio';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.state = this.store.getState();

        // this.state = {
        //     about: null,
        //     skills: null,
        //     portfolio: null
        // }
    }
 
    componentWillMount() {
        this.setState({
            about,
            skills,
            portfolio,
        });
        /*axios.get('http://api.kanni.loc/main')
            .then(response => response.data())
            .then(test => this.setState({ test }))
            .catch(error=> console.error(error.message));*/
    }
    render(){
        console.log(this.state);
        return(
            <div className="wrapper">
                <HomeHeader store={this.store} />
                <HomeAbout  store={this.store} aboutData={this.state.about} mySkills={this.state.skills} config={this.state.config} />
                <HomeMyServices />
                <HomePortfolio  store={this.store} portfolio={this.state.portfolio}/>
                <WorkedWith  store={this.store}  />
            </div>
        )
    }
}

export default Home;