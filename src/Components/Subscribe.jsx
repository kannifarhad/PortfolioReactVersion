import React from 'react';
import { connect } from 'react-redux';

function Subscribe(props) {
    return(
        <div className="subscribe">
            <div className="left">
                <div className="texthead">
                    <h1>{props.languageData['SUBSCRIBE TO SITE']}</h1>
                    <p>{props.languageData['subscribeText']}</p>
                </div>
            </div>
            <div className="right">
                <form className="subscribeus" id="ajax-subscribe" method="post" action="/form/addsubscriber">
                    <div className="form-block msize">
                        <input type="text" name="name" defaultValue="" placeholder={props.languageData['Your Name...']} required />
                    </div>

                    <div className="form-block msize">
                        <input type="email" name="email" defaultValue="" placeholder={props.languageData['Your E-mail...']} required />
                    </div>

                    <div className="form-messages" id="subscribe-message"></div>

                    <div className="form-block lsize">
                        <input type="submit" name="name" value={props.languageData['Subscribe Me']} />
                    </div>
                </form><div className="clear"></div>
            </div><div className="clear"></div>
        </div>
    )
}

const mapStateToProps = store => {
    return {
        languageData: store.languageData
    }
};
const mapDispatchToProps = dispatch => ({});
const SubscribeContainer = connect(mapStateToProps, mapDispatchToProps)(Subscribe);

export default SubscribeContainer;