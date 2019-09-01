import React from 'react';
import { connect } from 'react-redux';

import HomeHeader from '../Components/HomeHeader';
import HomeAbout from '../Components/HomeAbout';
import HomeMyServices from '../Components/HomeMyServices';
import HomePortfolio from '../Components/HomePortfolio';
import WorkedWith from '../Components/WorkedWith';

function HomePage (props) {
        return(
            <div className="wrapper">
                <HomeHeader />
                <HomeAbout />
                <HomeMyServices />
                <HomePortfolio />
                <WorkedWith /> 
            </div>
        )
}


const mapStateToProps = (store, ownProps) => {
    return {
        store,
        ...ownProps
    }
};

const Home = connect(mapStateToProps, null)(HomePage);
export default Home;