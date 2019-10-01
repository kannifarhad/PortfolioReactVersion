import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group' 


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
            <CSSTransitionGroup 
                transitionName="zoomAni"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
            >
                {props.items.map(item => 
                    <div key={item.id} className={`animated items ${item.categorylist.join(' ')}`}>
                        <div className="itemover" style={{backgroundColor: checkColorValue(item.extras, 'color')}}>
                            <div className="texts">
                                <h2>{item.title}</h2>
                                <p>{item.categorylist.map(cat => { return <Link key={cat.id} to={`/${props.config.lang}/${cat.slug}`}>{cat.title}</Link>   })}</p>
                                <Link className="readmore" to={`/${props.config.lang}/portfolio${(props.categorySlug) ? `/${props.categorySlug}` : ''}/view/${item.slug}`}>{props.languageData['View More']}</Link>
                            </div>
                        </div>
                        <img src={item.thumb_image} />
                    </div>
                )}
            </CSSTransitionGroup>
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