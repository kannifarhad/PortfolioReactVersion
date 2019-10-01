import React from 'react';

function Reload (props) {
    return (
        <div className="preloading">
            <div className="center">
                <div onClick={() => props.reloadCall()} className="reload"><img src="http://kanni.pro/site/assets/img/reload.svg" /></div>
                <div className="error">
                    <h1>Error hapenned</h1>
                    <p>Please click the circle above to reload</p> 
                </div>
            </div>
        </div>
    )
}

export default Reload;