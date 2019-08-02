import React from 'react';
import { connect } from 'react-redux';

import HomeHeader from '../Components/HomeHeader';
import HomeAbout from '../Components/HomeAbout';
import HomeMyServices from '../Components/HomeMyServices';
import HomePortfolio from '../Components/HomePortfolio';
import WorkedWith from '../Components/WorkedWith';


import about from '../data/about';
import skills from '../data/skills';
import portfolio from '../data/portfolio';
import services from '../data/services';
import servicesInfo from '../data/servicesInfo';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.store;
    }
 
    componentWillMount() {
        this.setState({
            about,
            skills,
            portfolio,
            services,
            servicesInfo
        });
        /*axios.get('http://api.kanni.loc/main')
            .then(response => response.data())
            .then(test => this.setState({ test }))
            .catch(error=> console.error(error.message));*/
    }
    render(){
        return(
            <div className="wrapper">
                <HomeHeader />
                <HomeAbout aboutData={this.state.about} mySkills={this.state.skills} />
                <HomeMyServices languageData={this.state.languageData} servicesInfo={this.state.servicesInfo} servicesList={this.state.services} />
                {/* 
                <HomePortfolio portfolio={this.state.portfolio}/>
                */}
                <WorkedWith /> 
            </div>
        )
    }
}
const mapStateToProps = (store, ownProps) => {
    return {
        store,
        ownProps
    }
};

const Home = connect(mapStateToProps, null)(HomePage);
export default Home;