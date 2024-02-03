import "../../styles/contact.css";
import { useTranslation } from 'react-i18next';
import "../../styles/projects.css";
import sanMiguel from "../../assets/sanmiguel.png";


export const Projects = () => {


    const { t } = useTranslation(["project"]);

    return (
        <div className="project-container">
            <h1 className="project-h1">{t("projecttitle")}</h1>
            <div className="project-card">
            <img src={sanMiguel} alt="sanmiguel" className="project-image"/>
            <div className="project-btn-container">
                <a href="https://github.com/AgustinMelita/cafesanmiguel" target="_blank" rel="noopener noreferrer" ><button  className='project-btn'>{t("code")}</button></a>
                <a href="https://agustinmelita.github.io/cafesanmiguel/" target="_blank" rel="noopener noreferrer" ><button  className='project-btn'>{t("website")}</button></a>
            </div>
            </div>
        </div>
    );
};
