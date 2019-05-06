import React from 'react';

import HeadMenu from "./Elements/HeadMenu";
import HeaderAnimation from './Elements/HeaderAnimation';

function HomeHeader(props){
    return (
        <div>
            {/* <HeadMenu menuData={props.menuData} /> */}
            <HeaderAnimation />
        </div>
    )
}

export default HomeHeader;