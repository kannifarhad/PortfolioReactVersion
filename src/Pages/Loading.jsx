import React from 'react';
import { connect } from 'react-redux';

function Loading (props){
        return(
            <div className="projectwrapper">
                <div className="projectcircles"></div>
                <div className="projecttitle"> <h1>{props.languageData['Loading!']}</h1></div>
                <div className="projectstory"> <p>{props.languageData['Please wait till content loads']}</p> </div>
                <div className="projectfull"></div>
            </div>
        )
}
const mapStateToProps = (store, ownProps) => {
    return {
        config : store.common.config,
        langList: store.common.langList,
        languageData: store.common.translations,
        ...ownProps
    }
};

export default connect(mapStateToProps, null)(Loading);