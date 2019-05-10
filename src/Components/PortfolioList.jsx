import React from 'react';

import PortfolioItemsList from './Elements/PortfolioItemsList';
import PortfolioHomeHead from './Elements/PortfolioHomeHead';



class PortfolioList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: mainMenu,
            typeSlug: this.props.match.params.typeSlug,
            categorySlug: this.props.match.params.categorySlug,
            categoryList: null,
            typeList: null
        }
    }
    render() {
        return(
            <div>
                {/* <PortfolioHomeHead categories={props.categories} />
                <PortfolioItemsList items={props.portfolio} categories={props.categories}/> */}
            </div>
        )
    }
}

export default PortfolioList;