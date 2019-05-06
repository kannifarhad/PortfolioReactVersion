import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super();
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
                        <h1>DROP A MESSAGE</h1>
                        <p>Use the form below to drop me an e-mail. You can be sure that your mail isn`t going to the inbox abyss, never to be seen or heard from again. I provide the exceptional service i`d want to experience myself. Old-fashioned phone calls work too - (+994 51) 303 50 55</p>
                    </div>

                    <div className="form-messages" id="contact-message"></div>

                    <form className="contactform" id="ajax-contact" method="post" action="http://api.kanni.pro/form/contact" onSubmit={this.sendMessage}>
                        <label className="half">   
                            <input type="text" ref="name" className="" id="name" name="name" required placeholder="Your Name..." />
                        </label>

                        <label className="half">
                            <input type="text" ref="email" className="" id="email" name="email" required placeholder="Your E-mail..." />
                        </label>

                        <label className="half">
                            <input type="text" ref="phone" id="phone" name="phone" placeholder="Your Phone Number..." />
                        </label>

                        <label className="half">
                            <input type="text" ref="subject" id="subjects" name="subjects" placeholder="Subject..." />
                        </label>

                        <textarea id="message" ref="message" name="message" required className="" placeholder="Type your message"></textarea>
                        <input type="submit" value="Send Message" />
                    </form>

                </div>
            </div>
        )
    }
}

export default Contact;