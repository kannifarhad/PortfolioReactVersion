import React from 'react';
import ReactDOM from 'react-dom';

import HomeAbout from '../Components/HomeAbout';
import HomePortfolio from '../Components/HomePortfolio';
import HomeHeader from '../Components/HomeHeader';



import config from '../data/config';
import menu from '../data/menu';
import about from '../data/about';
import skills from '../data/skills';
import portfolio from '../data/portfolio';
import categories from '../data/categories';


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: categories,
            about: about,
            menuData: menu,
            skills: skills,
            config: config,
            portfolio: portfolio,
            test: ''
        }
    }
    componentDidMount() {
        console.log('Home Component did Mount');
        /*axios.get('http://api.kanni.loc/main')
            .then(response => response.data())
            .then(test => this.setState({ test }))
            .catch(error=> console.error(error.message));*/
    }
    render(){
        return(
            <div className="wrapper">
                <HomeAbout />
                <HomePortfolio />
                <HomeHeader />
               
            </div>
        )
    }
}

export default Home;