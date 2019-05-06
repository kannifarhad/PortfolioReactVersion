import React from 'react';


class PortfolioList extends React.Component {
    constructor(props) {
        super();
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
                                        return this.props.categories.map(cat => {if (cat.slug == categorie) return <a key={cat.id} href={`{{URL}}{{lang}}/posts/${cat.type}}/${cat.slug}`} target="_blank">{cat.title}</a> });                                             
                                                }
                                    )}
                                </p>
                                <a className="readmore" href="{{URL}}{{lang}}/posts/{{post.type}}/{{poscategory}}/view/{{post.slug}}">View More</a>
                            </div>
                        </div>
                        <img src={item.thumb} />
                    </div>
                )}
            </div>
        )
    }
}

export default PortfolioList;