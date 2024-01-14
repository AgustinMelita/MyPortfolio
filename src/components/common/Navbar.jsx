import React from 'react';
import "../../styles/navbar.css";
import { useTranslation } from 'react-i18next';


export const Navbar = () => {

    //scroll

    const scrollToSection = (sectionId, event) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
    
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    

    //Logo

    const logo = "</>"

    //Traduccion

    const {t, i18n} = useTranslation(["navbar"]);
    const changeLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
    }

    //Entre Home y contact va el projects

  return (
    <div>
        <header className='nav-container'>
            <div className='logo'>
                <h1>{logo}</h1>
            </div>

            <div className='shortcuts'>
                <ul>
                <div className="btn-container">
                    <label className="switch btn-color-mode-switch">
                        <input onClick={changeLanguage} value="1" id="color_mode" name="color_mode" type="checkbox"/>
                        <label className="btn-color-mode-switch-inner" data-off="ES" data-on="EN" for="color_mode"></label>
                    </label>
                </div>
                    <li><a href="#home" onClick={(e) => scrollToSection('home', e)} >{t("home")}</a></li>
                    <li><a href="#contact" onClick={(e) => scrollToSection('contact', e)}  >{t("contact")}</a></li>
                </ul>
            </div>
        </header>
        <div className='nav-border'></div>
    </div>
  )
}
