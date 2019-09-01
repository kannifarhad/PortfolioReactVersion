import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


function PortfolioItemsList(props){
        function checkColorValue(elem, tag){
            try {
                if(elem.hasOwnProperty(tag)){
                    return elem[tag];
                }
            } catch (error) {
                return "rgba(0,0,0, 0.5)";
            }
        }
        return(
            <React.Fragment>
                {
                    (typeof props.items != 'undefined') ?
                    props.items.postslist.map(item => 
                    <div key={item.id} className={`items ${item.categorylist.join(' ')}`}>
                        <div className="itemover" style={{backgroundColor: checkColorValue(item.extras, 'color')}}>
                            <div className="texts">
                                <h2>{item.title}</h2>
                                {/* <p>{props.categoriesList.map(categorie => 
                                                { return props.categoriesList.map(cat => { return (cat.slug == categorie) ? <Link key={cat.id} to={`/${cat.slug}`} target="_blank">{cat.title} </Link> : false  })  
                                                })}
                                </p> */}
                                <Link className="readmore" to={`/${props.config.lang}/portfolio${(props.categorySlug) ? `/${props.categorySlug}` : ''}/view/${item.slug}`}>{props.languageData['View More']}</Link>
                            </div>
                        </div>
                        <img src={item.thumb_image} />
                    </div>
                )
                : "Loading"}
            </React.Fragment>
        );
}

const mapStateToProps = (store, ownprops) => {
    return {
        config: store.common.config,
        languageData: store.common.translations,
        store,
        ...ownprops
    }
};
const mapDispatchToProps = dispatch => ({
    portfolioCategoryChange: slug => dispatch(portfolioCategoryChange(slug))
});
const ContainerPortfolioItemsList = connect(mapStateToProps, mapDispatchToProps)(PortfolioItemsList);

export default ContainerPortfolioItemsList;