import React from 'react';
import {NavLink} from 'react-router-dom';

function UlLlist(props) {
    return(
        <ul className={props.listClass}>
            {props.menu.map(item =>  <li key={item.id}>
                                        <NavLink 
                                            className={(item.link.indexOf(props.typeSlug) > -1 ) ? 'active' : ''} 
                                            to={item.link}>
                                            {(props.icons) ? <span className={`icons ${item.icon}`}></span> : ''}
                                            <span className='menutitle'>{item.name}</span>
                                        </NavLink>
                                        {(item.children) ? <UlLlist menu={item.children} listClass='submenu' icon={false} /> : ''}
                                    </li>)}
            {
                (props.LangClicked) ? 
                    <li><a><span className='menutitle'>Language</span></a>
                        <ul className="submenu">
                            {props.config.langlist.map(item =><li key={item.id}><a onClick={() => props.LangClicked(item.slug)} >{item.title}</a> </li>)}
                        </ul>
                    </li>
                : ''}
        </ul>
    )
}

export default UlLlist;