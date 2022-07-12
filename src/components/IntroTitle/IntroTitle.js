import './IntroTitle.css'
import Reveal from "react-awesome-reveal";
import {keyframes} from "@emotion/react";

const customAnimation = keyframes`
  0% {
    opacity: 0.5;
    transform: translate3d(15%, -100px, 0) scale(0.5);
  }
  25% {
    opacity: 0.25;
    transform: translate3d(35%, -50px, 0) scale(0.5);
  }
  50% {
    opacity: 0.5;
    transform: translate3d(70%, -50px, 0) scale(0.75);
  }

  75% {
    opacity: 0.75;
    transform: translate3d(70%, -50px, 0) scale(0.85);
  }

  100% {
    opacity: 1;
    transform: translate3d(0%, 0px, 0) scale(1);
    color: #FFF;
  }
`;


const changeColor = keyframes`
  0% {
    color: #FF0000;
  }

  100% {
    color: #FFF;
  }
`;


function IntroTitle() {
    return (<div className="IntroTitle-container">
        <div className="IntroTitle-text"/>
        {/*ПРИВЕТ, МЫ - COLLIDER НА САВЕЛОВСКОЙ, И МЫ БОЛЬШЕ, ЧЕМ*/}


        <div className="IntroTitle-ellipse" alt={""}/>
        {/*<Reveal keyframes={customAnimation} cascade={true} duration={700} fraction={0.5}>*/}
        {/*    <span className="IntroTitle-title">КОВОРКИНГ</span>*/}
        {/*    <span className="IntroTitle-title">КОВОРКИНГ</span>*/}
        {/*    <span className="IntroTitle-title">КОВОРКИНГ</span>*/}
        {/*    <span className="IntroTitle-title">КОВОРКИНГ</span>*/}
        {/*    <span className="IntroTitle-title">КОВОРКИНГ</span>*/}
        {/*</Reveal>*/}
    </div>);
}

export default IntroTitle;