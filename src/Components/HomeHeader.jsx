import React from 'react';
import {NavLink} from 'react-router-dom';

import UlList from './Elements/UlLlist';
import HeaderAnimation from './Elements/HeaderAnimation';

class HomeHeader extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            phoneMenuOpened: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleLangChange = this.handleLangChange.bind(this);
    }

    handleLangChange(lang){
        this.props.langChanged(lang);
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
                            lang={this.props.lang}
                            menu={this.props.menuData} 
                            config={this.props.config} 
                            listClass='menu' 
                            icons={false} 
                            LangClicked={this.handleLangChange} 
                            />
                    </div>
                    
                    <div id="phonemenu">
                        <div className="menyunuach" onClick={this.handleClick}>Open Menu</div>
                        <ul className='phonemenu'>
                        {this.props.menuData.map(menu => 
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