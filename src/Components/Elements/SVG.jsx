import React from 'react';

function SVG (props) {
    var httpRequest = new XMLHttpRequest()
    httpRequest.onreadystatechange = function (data) {
     console.log(data);
    }
    httpRequest.open('GET', props.path);
    httpRequest.send();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
            <circle cx="25" cy="25" r="20"/>
        </svg>
    )
}

export default SVG;