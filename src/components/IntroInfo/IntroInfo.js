import React from 'react';
import './IntroInfo.css'
import {Fade} from "react-awesome-reveal";

function IntroInfo() {
    return (
        <div className="intro-info-container">
            <Fade cascade={true}>
                <div className="intro-info-container-item">Вятская 27, ст 7</div>
                <div className="intro-info-container-item">Бизнес квартал "Фактория"</div>
                <div className="intro-info-container-item">+7 999 825 22 39</div>
                <div className="intro-info-container-item">event@collider.ru</div>
            </Fade>
        </div>
    );
}

export default IntroInfo;