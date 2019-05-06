import React from 'react';


class HeadMenu extends React.Component {
    constructor(props){
        super();

        this.props = props;

        this.state = {
            phoneMenuOpened: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        if(this.state.phoneMenuOpened) {
            $('.phonemenu').slideUp(500);
        } else {
            $('.phonemenu').slideDown(500);
        }
        this.setState({
            phoneMenuOpened: !this.state.phoneMenuOpened
        })
        
    }

    render() {
        return(
                <div>
                    <div id="menu">
                        <ul className='menu'>
                        {this.props.menuData.map(menu => 
                            <li key={menu.id}><a href={menu.link}><span className='menutitle'>{menu.name}</span></a></li>
                        )}
                        </ul>
                    </div>
                    <div id="phonemenu">
                        <div className="menyunuach" onClick={this.handleClick}>Open Menu</div>
                        <ul className='phonemenu'>
                        {this.props.menuData.map(menu => 
                            <li key={menu.id}><a href={menu.link}><span className='menutitle'>{menu.name}</span></a></li>
                        )}
                        </ul>	
                    </div>
                </div>
            )
    }
}

export default HeadMenu;