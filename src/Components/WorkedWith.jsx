import React from 'react';

function WorkedWith(props) {
    return(
        <div id="workedwith">
            <div className="workedhead">
                <div>
                <h1>iworked.title</h1>
                <p>iworked.description</p>
                </div>
            </div>

            <div className="workwith">
                <div className="logos">
                for company in compaines 
                <a href="company.shortstory" target="_blank" alt="company.title"><img className="svg" src="company.thumb_image" /></a>
                endfor 
                </div>
            </div><div className="clear"></div>
        </div>
    )
}

export default WorkedWith;