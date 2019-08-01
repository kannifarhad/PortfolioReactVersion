import React from 'react';

function WorkedWith(props) {
    var state = props.store.getState();

    return(
        <div id="workedwith">
            <div className="workedhead">
                <div>
                <h1>{state.languageData['Defalut']}</h1>
                <p>{state.languageData['Defalut']}</p>
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