import React from 'react';

import HomeHeader from './HomeHeader';
class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <HomeHeader />
            </div>
        )
    }
}

export default Header;