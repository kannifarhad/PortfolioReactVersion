import React from 'react';

import HomeHeader from '../Components/HomeHeader';
import HomeAbout from '../Components/HomeAbout';
import HomeMyServices from '../Components/HomeMyServices';
import HomePortfolio from '../Components/HomePortfolio';
import Subscribe from '../Components/Subscribe';
import WorkedWith from '../Components/WorkedWith';


import about from '../data/about';
import skills from '../data/skills';
import portfolio from '../data/portfolio';


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            config: this.props.config,
            menuData: this.props.menu,
            languageData: this.props.language,
            categories: this.props.categories,
            about: null,
            skills: null,
            portfolio: null
        }
    }
    componentWillMount() {
        // console.log(this.props.config);
        this.setState({
            about,
            skills,
            portfolio
        });
        /*axios.get('http://api.kanni.loc/main')
            .then(response => response.data())
            .then(test => this.setState({ test }))
            .catch(error=> console.error(error.message));*/
    }
    render(){
        return(
            <div className="wrapper">
                <HomeHeader config={this.state.config} menuData={this.state.menuData['main-menu']}/>
                <HomeAbout aboutData={this.state.about} mySkills={this.state.skills} config={this.state.config} />
                <HomeMyServices />
                <HomePortfolio  categories={this.state.categories} portfolio={this.state.portfolio}/>
                <WorkedWith languageData={this.state.languageData} />
                <Subscribe  languageData={this.state.languageData} />
            </div>
        )
    }
}

export default Home;