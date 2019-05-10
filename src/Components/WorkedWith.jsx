import React from 'react';

function WorkedWith(props) {
    return(
        <div id="workedwith">
            <div className="workedhead">
                <div>
                <h1>{props.languageData['Defalut']}</h1>
                <p>{props.languageData['Defalut']}</p>
                </div>
            </div>

            <div className="workwith">
                <div className="logos">
                    <a href="company.shortstory" target="_blank" alt="company.title"><img className="svg" src="company.thumb_image" /></a>
                </div>
            </div><div className="clear"></div>
        </div>
    )
}

export default WorkedWith;