import React from 'react';
import { connect } from 'react-redux';

import UlList from './Elements/UlLlist';
import HeaderAnimation from './Elements/HeaderAnimation';
import {langChange} from '../Redux/actions';

function HomeHeader (props){
        return(
            <div>
            {(typeof props.menusList!= 'undefined')?
                <div>
                    <div id="menu">
                        <UlList 
                            menu={props.menusList.mainmenu.menujson} 
                            listClass='menu' 
                            icons={false} 
                            LangClicked = {props.langChange} 
                            config = {props.config}
                            langList= {props.langList}
                            languageData={props.translations}
                            />
                    </div>
                    
                    <div id="phonemenu">
                        <div className="menyunuach">Open Menu</div>
                        <UlList 
                            menu={props.menusList.mainmenu.menujson} 
                            listClass='phonemenu' 
                            icons={false} 
                            LangClicked = {props.langChange} 
                            config = {props.config}
                            langList= {props.langList}
                            languageData={props.translations}
                            />	
                    </div>
                </div>
            : <div>Loading</div>}
                <HeaderAnimation />
                </div>
            )
    }


const mapStateToProps = store => {
    return {
        menusList: store.common.menusList,
        config: store.common.config,
        langList: store.common.langList,
        translations: store.common.translations,
    }
};
const mapDispatchToProps = dispatch => ({
    langChange: lang => dispatch(langChange(lang))
});

const HomeHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
export default HomeHeaderContainer;