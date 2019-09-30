import React from 'react';
import { connect } from 'react-redux';

import HomeHeader from '../Components/HomeHeader';
import HomeAbout from '../Components/HomeAbout';
import HomeMyServices from '../Components/HomeMyServices';
import HomePortfolio from '../Components/HomePortfolio';
import HomeBlog from '../Components/HomeBlog';
import WorkedWith from '../Components/WorkedWith';
import {Helmet} from "react-helmet";

function HomePage (props) {
        return(
            <div className="wrapper">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{props.config.author + ' | '}</title>
                    <meta name="description" content={props.config.author} />
                </Helmet>
                <HomeHeader />
                <HomeAbout />
                <HomeMyServices />
                <HomePortfolio />
                <HomeBlog />
                <WorkedWith /> 
            </div>
        )
}


const mapStateToProps = (store, ownProps) => {
    return {
        config : store.common.config,
        languageData: store.common.translations,
        ...ownProps
    }
};

const Home = connect(mapStateToProps, null)(HomePage);
export default Home;