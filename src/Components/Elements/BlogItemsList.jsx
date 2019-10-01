import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group' 


function BlogItemsList(props){
        let alignValue = false;
        function checAlign(){
            alignValue = !alignValue;
            return (alignValue) ? 'leftalign' : 'rightalign';
        }
        function convertDate(dateString){
            let parsedDate = new Date(dateString);
            var monthArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return `${parsedDate.getDate()}-${props.languageData[monthArray[parsedDate.getMonth()]] }-${parsedDate.getFullYear()}`;
        }
        return(
            <div className="blogitemscont">
                <CSSTransitionGroup 
                    transitionName="zoomAni"
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}
                >
                {props.items.map(item => 
                <div key={item.id} className={`blogitem animated ${checAlign()}`}>

                    <div className="imageblock">
                        <div className="blogcategory"><span className="icons icon-webdesign"></span></div>
                        <Link to={`/${props.config.lang}/portfolio${(props.categorySlug) ? `/${props.categorySlug}` : ''}/view/${item.slug}`} className="imageitem"> <img src={item.thumb_image} /></Link>
                    </div>

                    <div className="shortstory">
                        <h1><Link to={`/${props.config.lang}/blog${(props.categorySlug) ? `/${props.categorySlug}` : ''}/view/${item.slug}`}>{item.title}</Link></h1>
                        <p className="catlist">
                            <a href="URLlang/posts/categories[cats].type/cats" target="_blank">categories[cats].title</a>
                        </p>
                        <span>{convertDate(item.date)}</span>
                        <div className="clear"></div>
                        <p>{item.shortstory}</p>
                    </div>
                    <div className="clear"></div>
                </div>
                )}
                </CSSTransitionGroup>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogItemsList);