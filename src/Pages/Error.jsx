import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";
import { connect } from 'react-redux';

function Error(props) {
        let currentLang = props.langList.filter(lang => { return lang.slug == props.config.lang})[0];

        return(
            <React.Fragment>
                <Helmet>
                    <title>{currentLang.sitetitle + ' | ' + props.languageData['Error!']}</title>
                    <meta name="description" content={currentLang.description} />
                </Helmet>
                <div className="projectwrapper">
                    <div className="projectcircles"></div>
                    <div className="projecttitle"> <h1>{props.languageData['Error!']}</h1></div>
                    <div className="projectstory"> <p>{props.languageData['This page doesn`t exists']}</p> </div>
                    <div className="projectfull"></div>
                </div>
            </React.Fragment>
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

export default connect(mapStateToProps, null)(Error);
