import React from 'react';
import {Link} from 'react-router-dom';

export default function PortfolioItemsList(props){
        return(
            <React.Fragment>
                {props.items.map(item => 
                    <div key={item.id} className={`items ${item.categories.join(' ')}`}>
                        
                        <div className="itemover" style={{backgroundColor: item.extras.color}}>
                            <div className="texts">
                                <h2>{item.title}</h2>
                                <p>{item.categories.map(categorie => { return props.categories.map(cat => { return (cat.slug == categorie) ? <Link key={cat.id} to={`/${cat.slug}`} target="_blank">{cat.title} </Link> : false  })  
                                                                        })}</p>
                                <Link className="readmore" to={`/${props.lang.slug}/portfolio${(props.categorySlug) ? `/${props.categorySlug}` : ''}/view/${item.slug}`}>{props.languageData['View More']}</Link>
                            </div>
                        </div>
                        <img src={item.thumb} />
                    </div>
                )}
            </React.Fragment>
        );
}