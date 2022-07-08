import './IntroTitle.css'
import {Slide} from "react-awesome-reveal";

function IntroTitle() {
    return (
        <div className="IntroTitle-container">
            <div className="IntroTitle-text">ПРИВЕТ, МЫ - COLLIDER НА САВЕЛОВСКОЙ, И МЫ БОЛЬШЕ, ЧЕМ <Slide>
                <span>КОВОРКИНГ</span>
            </Slide></div>
            {/*<div className="IntroTitle-text" alt={""}/>*/}
            {/*<div className="IntroTitle-ellipse" alt={""}/>*/}
        </div>
    );
}

export default IntroTitle;