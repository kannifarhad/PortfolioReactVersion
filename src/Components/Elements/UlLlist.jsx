import React from 'react';
import {NavLink} from 'react-router-dom';

export default function UlLlist(props) {
    const checkActive = (match, location) => {
        if(!match) return false;
        return match.url != "/"+props.config.lang;
    }
    return(
        <ul className={props.listClass}>
            {props.menu.map(item =>  <li key={item.id}>
                                        <NavLink isActive={checkActive} to={`/${props.config.slug}${item.link}`} >
                                            {(props.icons) ? <span className={`icons ${item.icon}`}></span> : ''}
                                            <span className='menutitle'>{item.name}</span>
                                        </NavLink>
                                        {(item.children) ? <UlLlist menu={item.children} listClass='submenu' icon={false} /> : ''}
                                    </li>)}
            {
                (props.LangClicked) ? 
                    <li><a><span className='menutitle'>Language</span></a>
                        <ul className="submenu">
                            {props.config.langlist.map(item =><li key={item.id}><a onClick={() => props.LangClicked(item.slug)} ><span className='menutitle'>{item.title}</span></a> </li>)}
                        </ul>
                    </li>
                : ''}
        </ul>
    )
}
