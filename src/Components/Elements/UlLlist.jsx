import React from 'react';
import ReactDOM from 'react-dom';


function UlLlist(props) {
    return(
        <ul className={props.listClass}>
            {props.menu.map(item =>  <li key={item.id}>
                                        <a className={(item.link.indexOf(props.typeSlug) > -1 ) ? 'active' : ''} href={item.link}>
                                            {(props.icons) ? <span className={`icons ${item.icon}`}></span> : ''}<span className='menutitle'>{item.name}</span>
                                        </a>
                                        {(item.children) ? <UlLlist menu={item.children} listClass='submenu' icon={false} /> : ' '}
                                    </li>)}
        </ul>
    )
}

export default UlLlist;