import React from 'react';

function Subscribe(props) {
    return(
        <div className="subscribe">
            <div className="left">
                <div className="texthead">
                    <h1>SUBSCRIBE TO SITE</h1>
                    <p>Subscribe text.</p>
                </div>
            </div>
            <div className="right">
                <form className="subscribeus" id="ajax-subscribe" method="post" action="/form/addsubscriber">
                    <div className="form-block msize">
                        <input type="text" name="name" defaultValue="" placeholder="Your Name..." required />
                    </div>

                    <div className="form-block msize">
                        <input type="email" name="email" defaultValue="" placeholder="Your E-mail..." required />
                    </div>

                    <div className="form-messages" id="subscribe-message"></div>

                    <div className="form-block lsize">
                        <input type="submit" name="name" defaultValue="Subscribe Me" />
                    </div>
                </form><div className="clear"></div>
            </div><div className="clear"></div>
        </div>
    )
}

export default Subscribe;