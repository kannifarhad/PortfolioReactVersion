import React from 'react';
import {NavLink} from 'react-router-dom';

export default function UlLlist(props) {
    const checkActive = (match, location) => {
        if(!match) return false;
        return match.url != "/"+props.config.lang;
    }
    
    return(
        <ul className={props.listClass}>
            {props.menu.map(item =><li key={item.id}>
                                        <NavLink isActive={checkActive} to={`${props.config.lang}/${item.link}`} >
                                            {(props.icons) ? <span className={`icons ${item.icon}`}></span> : ''}
                                            <span className='menutitle'>{item.name}</span>
                                        </NavLink>
                                        {(item.children) ? <UlLlist menu={item.children} config={props.config} listClass='submenu' icon={false} /> : ''}
                                    </li>)}
            {(typeof props.langList != 'undefined') ? 
                <li key={12121}><a><span className='menutitle'>Language</span></a>
                <ul className="submenu">
                    {props.langList.map(item =><li key={item.slug}><a onClick={() => props.LangClicked(item.slug)} ><span className='menutitle'>{item.title}</span></a> </li>)}
                </ul>
            </li>
            : ''}
        </ul>
    )
}
