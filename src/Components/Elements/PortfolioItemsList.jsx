import React from 'react';
import {Link} from 'react-router-dom';

export default function PortfolioItemsList(props){
        var state = props.store.getState();
        return(
            <React.Fragment>
                {props.items.map(item => 
                    <div key={item.id} className={`items ${item.categories.join(' ')}`}>
                        
                        <div className="itemover" style={{backgroundColor: item.extras.color}}>
                            <div className="texts">
                                <h2>{item.title}</h2>
                                <p>{state.categoriesList.map(categorie => { return state.categoriesList.map(cat => { return (cat.slug == categorie) ? <Link key={cat.id} to={`/${cat.slug}`} target="_blank">{cat.title} </Link> : false  })  
                                                                        })}</p>
                                <Link className="readmore" to={`/${state.config.lang}/portfolio${(props.categorySlug) ? `/${props.categorySlug}` : ''}/view/${item.slug}`}>{state.languageData['View More']}</Link>
                            </div>
                        </div>
                        <img src={item.thumb} />
                    </div>
                )}
            </React.Fragment>
        );
}