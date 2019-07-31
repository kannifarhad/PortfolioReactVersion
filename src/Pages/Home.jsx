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
        
        this.state = {
            config: this.props.config,
            menuData: this.props.menu,
            languageData: this.props.languageData,
            categories: this.props.categories,
            about: null,
            skills: null,
            portfolio: null
        }
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
        return(
            <div className="wrapper">
                <HomeHeader store={this.store} lang={this.props.lang} langChanged={this.handleHomeLangChange} config={this.state.config} menuData={this.state.menuData['main-menu']}/>
                <HomeAbout  store={this.store} lang={this.props.lang} aboutData={this.state.about} mySkills={this.state.skills} config={this.state.config} />
                <HomeMyServices />
                <HomePortfolio  store={this.store} languageData={this.state.languageData} lang={this.props.lang} categories={this.state.categories} portfolio={this.state.portfolio}/>
                <WorkedWith  store={this.store} languageData={this.state.languageData} />
            </div>
        )
    }
}

export default Home;