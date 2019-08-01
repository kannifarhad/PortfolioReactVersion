import React from 'react';
import {NavLink} from 'react-router-dom';

export default function UlLlist(props) {
    var store = props.store;
    var state = store.getState();
    const checkActive = (match, location) => {
        if(!match) return false;
        return match.url != "/"+state.config.lang;
    }
    return(
        <ul className={props.listClass}>
            {props.menu.map(item =>  <li key={item.id}>
                                        <NavLink isActive={checkActive} to={`/${state.config.slug}${item.link}`} >
                                            {(props.icons) ? <span className={`icons ${item.icon}`}></span> : ''}
                                            <span className='menutitle'>{item.name}</span>
                                        </NavLink>
                                        {(item.children) ? <UlLlist menu={item.children} listClass='submenu' icon={false} /> : ''}
                                    </li>)}
            {
                (props.LangClicked) ? 
                    <li><a><span className='menutitle'>Language</span></a>
                        <ul className="submenu">
                            {state.config.langlist.map(item =><li key={item.id}><a onClick={() => props.LangClicked(item.slug)} ><span className='menutitle'>{item.title}</span></a> </li>)}
                        </ul>
                    </li>
                : ''}
        </ul>
    )
}
