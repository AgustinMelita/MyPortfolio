import {useRef} from "react";
import "../../styles/contact.css";
import { useTranslation } from 'react-i18next';
import emailjs from "@emailjs/browser";


export const Contact = () => {

    const {t} = useTranslation(["contact"]);

    // email 

    const form = useRef();
    

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mnhrj37', 'template_kbix3v5', form.current, '2q5iJ573yL4LTzFWo')
        .then((result) => {
            console.log(result.text);
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div id="contact" className="contact-container">
            <div className="form-container">
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="name">{t("name")}</label>
                        <input required="" name="user_name" id="name" type="text" />
                        <label htmlFor="email">{t("email")}</label>
                        <input required="" name="user_email" id="email" type="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">{t("label")}</label>
                        <textarea required="" cols="50" rows="10" id="textarea" name="message"></textarea>
                    </div>
                    <button type="submit" value="Send" className="form-submit-btn">{t("submit")}</button>
                </form> 
            </div>
        </div>
    );
};
