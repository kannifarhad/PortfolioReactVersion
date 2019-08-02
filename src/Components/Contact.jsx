import React from 'react';
import { connect } from 'react-redux';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
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

            let contactSend = new XMLHttpRequest();
                contactSend.open("POST", actionURL);
                contactSend.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                contactSend.setRequestHeader('RequestVerificationToken', 'blabla');
                
                contactSend.onerror  = function () {console.log(this.responseText); };
                contactSend.send(JSON.stringify(data));
                contactSend.onreadystatechange = function(e) {
                    if (contactSend.readyState === 4) {
                        if (contactSend.status === 200) {
                            console.log(contactSend.response);
                            messageBox.classList.remove("errors");
                            messageBox.classList.add("success");
                        } else {
                            messageBox.classList.add("errors");
                            console.log(contactSend.response);
                        }
                    }
                }

    }

    render() {
        return(
            <div id="contact">
                <div className="contactwrapper">

                    <div className="contacthead">
                        <h1>{this.props.languageData['DROP A MESSAGE']}</h1>
                        <p>{this.props.languageData['contactText']}</p>
                    </div>

                    <div className="form-messages" id="contact-message"></div>

                    <form className="contactform" id="ajax-contact" method="post" action="http://api.kanni.pro/form/contact" onSubmit={this.sendMessage}>
                        <label className="half">   
                            <input type="text" ref="name" className="" id="name" name="name" required placeholder={this.props.languageData['Your Name...']} />
                        </label>

                        <label className="half">
                            <input type="text" ref="email" className="" id="email" name="email" required placeholder={this.props.languageData['Your E-mail...']} />
                        </label>

                        <label className="half">
                            <input type="text" ref="phone" id="phone" name="phone" placeholder={this.props.languageData['Your Phone Number...']} />
                        </label>

                        <label className="half">
                            <input type="text" ref="subject" id="subjects" name="subjects" placeholder={this.props.languageData['Subject...']} />
                        </label>

                        <textarea id="message" ref="message" name="message" required className="" placeholder={this.props.languageData['Type your message']}></textarea>
                        <input type="submit" value={this.props.languageData['Send Message']} />
                    </form>

                </div>
            </div>
        )
    }
}
const mapStateToProps = store => {
    return {
        languageData: store.languageData
    }
};
const mapDispatchToProps = dispatch => ({});
const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

export default ContactContainer;