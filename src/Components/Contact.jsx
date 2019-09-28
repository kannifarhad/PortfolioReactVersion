import React from 'react';
import { connect } from 'react-redux';
import {contactSend} from '../Redux/actions';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            contactStatus: false,
            contactMessage:false,
            sending:false
        }
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(event){
            event.preventDefault();
            let form = document.getElementById(event.target.id);
            let actionURL = form.getAttribute("action");
            let messageBox = document.getElementById("contact-message");
            let data = {};
            let requestToken = ' ';

            for (var ref in this.refs) {
                let refName = this.refs[ref].name;
                let refValue = this.refs[ref].value;
                if(this.refs[ref].required && refValue == '') {
                    this.refs[ref].classList.add("alert");
                    return false;
                }
                data[refName] = refValue;
            }
            data['lang'] = this.props.config.lang;
            this.setState({
                sending: true
            });
            this.props.contactSend(data).then(response => {
                
                let contactStatus = (response.type == "SEND_CONTACT") ? 'success' : 'error';
                let contactMessage = (response.type == "SEND_CONTACT") ? response.data : response.error;
                this.setState({
                    sending: false,
                    contactMessage,
                    contactStatus
                });
            });
       
    }

    render() {
        return(
            <React.Fragment>
                <div id="contact">
                    <div className="contactwrapper">

                        <div className="contacthead">
                            <h1>{this.props.languageData['DROP A MESSAGE']}</h1>
                            <p>{this.props.languageData['Use the form below to drop me an e-mail. You can be sure that your mail isn`t going to the inbox abyss, never to be seen or heard from again. I provide the exceptional service i`d want to experience myself. Old-fashioned phone calls work too']}  <b>{this.props.config.phone}</b></p>
                        </div>
                        {(this.state.contactStatus != false) ?
                        <div className={`form-messages ${(this.state.contactStatus == 'success') ? 'success' : 'errors'}`} id="contact-message">{this.state.contactMessage}</div>
                        : ''}
                        <form className="contactform" id="ajax-contact" method="post" action="" onSubmit={this.sendMessage}>
                            <label className="half">   
                                <input type="text" ref="name" className="" id="name" name="name" required placeholder={this.props.languageData['Your Name'] + '...'} />
                            </label>

                            <label className="half">
                                <input type="text" ref="email" className="" id="email" name="email" required placeholder={this.props.languageData['Your E-mail'] + '...'} />
                            </label>

                            <label className="half">
                                <input type="text" ref="phone" id="phone" name="phone" placeholder={this.props.languageData['Your Phone Number'] + '...'} />
                            </label>

                            <label className="half">
                                <input type="text" ref="subject" id="subject" name="subject" placeholder={this.props.languageData['Subject'] + '...'} />
                            </label>

                            <textarea id="message" ref="message" name="message" required className="" placeholder={this.props.languageData['Type your message'] + '...'}></textarea>
                            <input disabled={this.state.sending} type="submit" value={this.props.languageData['Send Message']} />
                        </form>

                    </div>
                </div>
                        
                <div className="copyright">
                    <p>Powered by Darth Vader. All Rights Reserved © 2018</p>
                </div>
            </React.Fragment>
        )
    }
}


const mapStateToProps = store => {
    return {
        config: store.common.config,
		languageData: store.common.translations,
    }
};

const mapDispatchToProps = dispatch => ({
    contactSend: data=> dispatch(contactSend(data))
});

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);
export default ContactContainer;