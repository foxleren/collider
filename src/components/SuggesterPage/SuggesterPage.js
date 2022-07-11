import './SuggesterPage.css'

import GalaryImage from '../GalaryImage/GalaryImage'
import {Bounce, Fade} from "react-awesome-reveal";

function SuggesterPage() {
    return (<div className="SuggesterPage-container">
        <div className="SuggesterPage-top-container">
            <Fade direction={"left"}>
                <div className="SuggesterPage-top-text">У НАС ЕСТЬ</div>
            </Fade>
            <div className="SuggesterPage-top-title-container">
                <Fade direction={"up"}>
                    <div className="SuggesterPage-top-title">МИНИ-ЗАЛЫ</div>
                    <div className="SuggesterPage-top-title">ПЕРЕГОВОРНЫЕ</div>
                </Fade>

            </div>
        </div>
        <div className="SuggesterPage-bottom-container">
            <div className="SuggesterPage-left-container">
                <Fade direction={"left"}>
                    <div className="SuggesterPage-left-text">1500 В ЧАС 10/40 ЧЕЛОВЕК
                        ОБОРУДОВАНИЕ ВКЛЮЧЕНО
                    </div>
                </Fade>

                <GalaryImage link={"/images/suggest_rectangle.svg"} extraClassName="rectangle"/>
            </div>
            <div className="SuggesterPage-right-container">
                <GalaryImage link={"/images/suggest_square.svg"} extraClassName="square"/>
                <div className="SuggesterPage-right-text-container">
                    <div className="SuggesterPage-right-title">КЕЙТЕРИНГ</div>
                    <div className="SuggesterPage-right-text">СТОИМОСТЬ ЗАВИСИТ ОТ КОЛИЧЕСТВА ЧЕЛОВЕК И ДЛИТЕЛЬНОСТИ
                        МЕРОПРИЯТИЯ
                    </div>
                </div>
            </div>
        </div>

    </div>);
}

export default SuggesterPage;