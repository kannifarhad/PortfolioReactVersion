import React from 'react';
import {Link} from 'react-router-dom';

class PortfolioItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render(){
        return(
            <div>
                {this.props.items.map(item => 
                    <div key={item.id} className={`items ${item.categories.join(' ')}`}>
                        
                        <div className="itemover" style={{backgroundColor: item.extras.color}}>
                            <div className="texts">
                                <h2>{item.title}</h2>
                                <p>
                                    {item.categories.map(categorie => {
                                        return this.props.categories.map(cat => {if (cat.slug == categorie) return <Link key={cat.id} to={`{{URL}}{{lang}}/posts/${cat.type}}/${cat.slug}`} target="_blank">{cat.title}</Link> });                                             
                                                }
                                    )}
                                </p>
                                <Link className="readmore" to="{{URL}}{{lang}}/posts/{{post.type}}/{{poscategory}}/view/{{post.slug}}">View More</Link>
                            </div>
                        </div>
                        <img src={item.thumb} />
                    </div>
                )}
            </div>
        )
    }
}

export default PortfolioItemsList;