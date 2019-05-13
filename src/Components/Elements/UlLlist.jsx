import React from 'react';
import {NavLink} from 'react-router-dom';

function UlLlist(props) {
    // console.log(props.typeSlug);
    return(
        <ul className={props.listClass}>
            {props.menu.map(item =>  <li key={item.id}>
                                        <NavLink exact to={`/${props.lang}${item.link}`}  >
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

export default UlLlist;