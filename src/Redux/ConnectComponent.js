import React from 'react';
import {connect} from 'react-redux';

export default function ConnectComponent(props){
    let C = connect( props.state,props.dispatch)(props.component);
    return (<C/>);
}