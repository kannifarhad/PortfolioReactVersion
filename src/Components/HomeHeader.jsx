import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

import UlList from './Elements/UlLlist';
import HeaderAnimation from './Elements/HeaderAnimation';
import {langChange} from '../Redux/actions';

class HomeHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = props.store;
        this.state.phoneMenuOpened = false;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        (this.state.phoneMenuOpened) ? $('.phonemenu').slideUp(500) : $('.phonemenu').slideDown(500);
        this.setState({
            phoneMenuOpened: !this.state.phoneMenuOpened
        })
        
    }

    render() {
        return(
                <div>
                    <div id="menu">
                        <UlList 
                            menu={this.state.menusList['main-menu']} 
                            listClass='menu' 
                            icons={false} 
                            LangClicked={this.props.langChange} 
                            config={this.state.config}
                            />
                    </div>
                    
                    <div id="phonemenu">
                        <div className="menyunuach" onClick={this.handleClick}>Open Menu</div>
                        <ul className='phonemenu'>
                        {this.state.menusList['main-menu'].map(menu => 
                            <li key={menu.id}><NavLink to={menu.link}><span className='menutitle'>{menu.name}</span></NavLink></li>
                        )}
                        </ul>	
                    </div>
                    {/* <HeaderAnimation /> */}
                </div>
            )
    }
}

const mapStateToProps = store => {
    return {
        store
    }
};
const mapDispatchToProps = dispatch => ({
    langChange: lang => dispatch(langChange(lang))
})
const HomeHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

export default HomeHeaderContainer;