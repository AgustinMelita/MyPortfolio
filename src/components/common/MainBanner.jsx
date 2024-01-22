import React from 'react'
import "../../styles/mainbanner.css"
import { useTranslation } from 'react-i18next';
import Documento from "../../assets/Curriculum.pdf"


export const MainBanner = () => {

    const {t} = useTranslation(["mainbanner"]);
    

  return (
    <div className='main-banner-container'>
        <div className='welcome'>
            <h2>{t("welcome")}</h2>
        </div>
        <div className='title'>
            <h1>{t("title")}</h1>
        </div>
        <div className='subtitle'>
            <h2>{t("subtitle")}</h2>
        </div>
        <div className='presentation'>
            <h4>{t("presentation")}</h4>
        </div>
        <a href={Documento} download><button  className='resume-button'>{t("resume")}</button></a>
    </div>
  )
}
