import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

function PagesHeader(props) {
        return(
            <div>
               {(props.categoryList) ?
                    <div className="categories">
                        <Link 
                            className={(props.categoryList.slug == props.category) ? 'active' : ''} 
                            onClick={() => props.categoryChange(props.categoryList.slug)}
                            to={`/${props.config.lang}/${props.categoryList.slug}` } 
                         >{props.languageData['All']}</Link>
                        {props.categoryList.children.map(item => 
                            <Link 
                                key={item.id} 
                                to={`/${props.config.lang}/${item.slug}`} 
                                className={(props.category == item.slug) ? 'active' : ''} 
                                data-filter={item.slug}
                                onClick={() => props.categoryChange(item.slug)}
                            >{item.title}</Link>
                            )}
                    </div> 
                : ''}
            </div>
        )
    }


const mapStateToProps = (store, ownprops) => {
    return {
        config: store.common.config,
		languageData: store.common.translations,
        store,
        ...ownprops, 
    }
};
const PagesHeaderContainer = connect(mapStateToProps, null)(PagesHeader);

export default PagesHeaderContainer;