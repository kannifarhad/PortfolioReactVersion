import React from 'react';
import { connect } from 'react-redux';
import workedWithInfo from '../data/workedWithInfo';
import workedWithList from '../data/workedWithList';

function WorkedWith(props) {
    console.log(props);
    return(
        <div id="workedwith">
            <div className="workedhead">
                <div>
                <h1>{props.workedWithInfo.title}</h1>
                <p>{props.workedWithInfo.description}</p>
                </div>
            </div>

            <div className="workwith">
                <div className="logos">
                    {props.workedWithList.map(partner => 
                        <a key={partner.id} href={partner.link} target="_blank" alt={partner.title}><img className="svg" src={partner.icon} /></a>
                    )}
                </div>
            </div><div className="clear"></div>
        </div>
    )
}
const mapStateToProps = (store) => {
    return {
        languageData: store.languageData,
        workedWithInfo,
        workedWithList
    }
};

const WorkedWithContainer = connect(mapStateToProps, null)(WorkedWith);

export default WorkedWithContainer;