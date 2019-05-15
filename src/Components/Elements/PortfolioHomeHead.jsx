import React from 'react';


class PortfolioHead extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render(){
        return(
            <div className="portfoliohead">
            	<h1>Featured Works</h1>
                <p>Rich experience that I got, using the various technique of programming and designing enable to make high quality and interesting products. I specialize in creating all types of digital graphic designs, web designs and websites. There is a little piece of my works which I did for last year.</p>
                <div className="clear"></div>
                <ul className="filters">
                    <li data-filter="all">All</li>
                    {this.props.categories.map(categorie => 
                        (categorie.type == 'portfolio') ? <li key={categorie.id} data-filter={`.${categorie.slug}`}>{categorie.title} </li> : false
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default PortfolioHead;