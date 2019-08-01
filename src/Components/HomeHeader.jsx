import React from 'react';
import {NavLink} from 'react-router-dom';

import UlList from './Elements/UlLlist';
import HeaderAnimation from './Elements/HeaderAnimation';
import {langChange} from '../Redux/actions';

class HomeHeader extends React.Component {
    constructor(props){
        super(props);
        this.store = this.props.store;
        this.state = this.store.getState();

        this.state.setState = {
            phoneMenuOpened: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleLangChange = this.handleLangChange.bind(this);
    }

    handleLangChange(lang){
        this.store.dispatch(langChange(lang));
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
                            LangClicked={this.handleLangChange} 
                            store={this.store}
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

export default HomeHeader;